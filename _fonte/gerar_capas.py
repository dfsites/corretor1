"""Gera as capas de compartilhamento (Open Graph, 1200x630).

Uso: node _fonte/gerar_capas.mjs   (exporta a lista de páginas e chama este script)
Entrada: JSON com [{ "arquivo": "assets/img/capas/blog/slug.jpg", "rotulo": "...", "titulo": "..." }]
A capa geral fica em assets/img/capa-corretor1.jpg.
"""
import json
import os
import sys

from PIL import Image, ImageDraw, ImageFont

RAIZ = sys.argv[1]
LISTA = json.load(open(sys.argv[2], encoding='utf-8'))
FONTES = 'C:/Windows/Fonts/'
W, H = 1200, 630
FUNDO = (0, 29, 35)
LARANJA = (255, 111, 15)
BRANCO = (255, 255, 255)
CINZA = (190, 200, 202)


def fonte(nome, tam):
    return ImageFont.truetype(FONTES + nome, tam)


def quebrar(draw, texto, f, largura):
    linhas, atual = [], ''
    for palavra in texto.split():
        teste = (atual + ' ' + palavra).strip()
        if draw.textlength(teste, font=f) <= largura:
            atual = teste
        else:
            if atual:
                linhas.append(atual)
            atual = palavra
    if atual:
        linhas.append(atual)
    return linhas


# Fundo: a mesma imagem do topo do site, recortada em 1200x630, com a sombra do hero (escura à esquerda).
FUNDO_IMG = os.path.join(RAIZ, 'assets/img/elite-1920.webp')
base = Image.open(FUNDO_IMG).convert('RGB')
escala = max(W / base.width, H / base.height)
base = base.resize((round(base.width * escala), round(base.height * escala)), Image.LANCZOS)
x0 = (base.width - W) // 2
y0 = round((base.height - H) * 0.4)
base = base.crop((x0, y0, x0 + W, y0 + H))
sombra = Image.new('RGBA', (W, H))
ds = ImageDraw.Draw(sombra)
for x in range(W):
    t = x / W
    alfa = 0.94 - 0.42 * t if t < 0.5 else 0.73 - 0.76 * (t - 0.5)
    ds.line((x, 0, x, H), fill=(0, 29, 35, round(255 * max(0.32, alfa))))
FUNDO_PRONTO = Image.alpha_composite(base.convert('RGBA'), sombra).convert('RGB')


def capa(destino, rotulo, titulo, subtitulo=None):
    im = FUNDO_PRONTO.copy()
    d = ImageDraw.Draw(im)
    # Marca
    fm = fonte('georgiab.ttf', 46)
    d.text((72, 60), 'Corretor', font=fm, fill=BRANCO)
    d.text((72 + d.textlength('Corretor', font=fm), 60), '1%', font=fm, fill=LARANJA)
    # Rótulo
    d.text((72, 160), rotulo.upper(), font=fonte('segoeuib.ttf', 24), fill=LARANJA)
    # Título: maior tamanho que caiba em até 4 linhas, na metade esquerda ampliada
    largura = 760
    for tam in (62, 56, 50, 46, 42, 38):
        ft = fonte('georgiab.ttf', tam)
        linhas = quebrar(d, titulo, ft, largura)
        if len(linhas) <= 4:
            break
    linhas = linhas[:4]
    y = 204
    for linha in linhas:
        d.text((72, y), linha, font=ft, fill=BRANCO)
        y += int(tam * 1.18)
    if subtitulo:
        fs = fonte('segoeui.ttf', 28)
        for linha in quebrar(d, subtitulo, fs, largura):
            d.text((72, y + 12), linha, font=fs, fill=(225, 230, 232))
            y += 38
    # Rodapé: só o domínio
    d.rectangle((72, 548, 132, 552), fill=LARANJA)
    d.text((72, 562), 'corretor1.com.br', font=fonte('segoeuib.ttf', 26), fill=BRANCO)
    caminho = os.path.join(RAIZ, destino)
    os.makedirs(os.path.dirname(caminho), exist_ok=True)
    im.save(caminho, 'JPEG', quality=82, optimize=True, progressive=True)


capa('assets/img/capa-corretor1.jpg', 'Para corretores de imóveis', 'Formação e prática para corretores de imóveis',
     'Do primeiro passo à carreira: artigos, glossário e legislação comentada')
for item in LISTA:
    capa(item['arquivo'], item['rotulo'], item['titulo'])
print(f'capas geradas: {len(LISTA) + 1}')
