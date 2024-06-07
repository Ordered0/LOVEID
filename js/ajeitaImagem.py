import sys
import logging
from rembg import remove
from PIL import Image
from pathlib import Path

# Configurar o logger
logging.basicConfig(filename='loging.log', level=logging.DEBUG)

# Obter os parâmetros passados do Node.js
newFileName = sys.argv[1]
inputPath = "/home/LOVEID/js/uploads/" + newFileName
newFileName = sys.argv[2]
outputPath = "/home/LOVEID/public/imagens/" + newFileName  +".png"

try:
    # Carregar a imagem original
    logging.info(f"Carregando a imagem original de {inputPath}")
    imagemOriginal = Image.open(inputPath) 
    Path(inputPath).unlink()
    
    # Remover o fundo usando rembg
    logging.info("Removendo o fundo da imagem")
    imagemSemFundo = remove(imagemOriginal).convert('RGBA')
    
    tamanhoSemFundo = (250, 270)
    
    # Carregar a imagem de fundo
    logging.info("Carregando a imagem de fundo")
    imagemFundo = Image.open("/home/LOVEID/imagensBase/fundoGoogle.png")
    
    # Redimensionar a imagem sem fundo para a mesma dimensão da imagem de fundo
    logging.info("Redimensionando a imagem sem fundo")
    imagemSemFundo = imagemSemFundo.resize(tamanhoSemFundo)

    imagemFundo.paste(imagemSemFundo, (400, 10), imagemSemFundo)

    # Salvar a imagem resultante
    logging.info(f"Salvando a imagem resultante em {outputPath}")
    imagemFundo.save(outputPath, quality=95)

    logging.info("Imagem final salva com sucesso.")
    print("Imagem final salva com sucesso em:", outputPath)

except Exception as e:
    logging.exception("Ocorreu um erro durante o processamento da imagem:")
    print("Erro:", e)
