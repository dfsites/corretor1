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
FOTO = os.path.join(RAIZ, 'assets/img/autores/daniel-ferreira.webp')


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


foto = Image.open(FOTO).convert('RGB').resize((84, 84), Image.LANCZOS)
mascara = Image.new('L', (84, 84), 0)
ImageDraw.Draw(mascara).ellipse((0, 0, 83, 83), fill=255)


def capa(destino, rotulo, titulo, subtitulo=None):
    im = Image.new('RGB', (W, H), FUNDO)
    d = ImageDraw.Draw(im)
    d.rectangle((0, 0, 14, H), fill=LARANJA)
    # Marca
    fm = fonte('georgiab.ttf', 44)
    d.text((72, 56), 'Corretor', font=fm, fill=BRANCO)
    d.text((72 + d.textlength('Corretor', font=fm), 56), '1%', font=fm, fill=LARANJA)
    # Rótulo
    d.text((72, 150), rotulo.upper(), font=fonte('segoeuib.ttf', 24), fill=LARANJA)
    # Título: maior tamanho que caiba em até 4 linhas
    largura = W - 72 - 90
    for tam in (64, 58, 52, 48, 44, 40):
        ft = fonte('georgiab.ttf', tam)
        linhas = quebrar(d, titulo, ft, largura)
        if len(linhas) <= 4:
            break
    linhas = linhas[:4]
    y = 196
    for linha in linhas:
        d.text((72, y), linha, font=ft, fill=BRANCO)
        y += int(tam * 1.18)
    if subtitulo:
        d.text((72, y + 10), subtitulo, font=fonte('segoeui.ttf', 28), fill=CINZA)
    # Rodapé: autor e domínio
    d.line((72, 500, W - 72, 500), fill=(40, 70, 76), width=2)
    im.paste(foto, (72, 520), mascara)
    d.text((172, 528), 'Daniel Ferreira', font=fonte('segoeuib.ttf', 28), fill=BRANCO)
    d.text((172, 566), 'Corretor de imóveis · CRECI-DF 12.668', font=fonte('segoeui.ttf', 22), fill=CINZA)
    fd = fonte('segoeuib.ttf', 26)
    dom = 'corretor1.com.br'
    d.text((W - 72 - d.textlength(dom, font=fd), 548), dom, font=fd, fill=LARANJA)
    caminho = os.path.join(RAIZ, destino)
    os.makedirs(os.path.dirname(caminho), exist_ok=True)
    im.save(caminho, 'JPEG', quality=82, optimize=True, progressive=True)


capa('assets/img/capa-corretor1.jpg', 'Para corretores de imóveis', 'Biblioteca profissional para corretores de imóveis',
     'Carreira, captação, negociação, legislação e glossário')
for item in LISTA:
    capa(item['arquivo'], item['rotulo'], item['titulo'])
print(f'capas geradas: {len(LISTA) + 1}')
