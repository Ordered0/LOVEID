from rembg import remove
from PIL import Image
from pathlib import Path
# Obter os parâmetros passados do Node.js

# Caminho de saída para a imagem resultante
outputPath = "/home/codigos-pessoais/public/imagens/final.png"

inputPath = "/home/codigos-pessoais/public/imagens/temp.png"

# Carregar a imagem original
imagemOriginal = Image.open(inputPath) 
Path.unlink("/home/codigos-pessoais/public/imagens/temp.png")
# Remover o fundo usando rembg
imagemSemFundo = remove(imagemOriginal).convert('RGBA')
tamanhoSemFundo = (250,270)
# Carregar a imagem de fundo
imagemFundo = Image.open("/home/codigos-pessoais/imagensBase/fundoGoogle.png")
# Redimensionar a imagem sem fundo para a mesma dimensão da imagem de fundo
imagemSemFundo = imagemSemFundo.resize(tamanhoSemFundo)

imagemFundo.paste(imagemSemFundo,(400,10),imagemSemFundo)

# Salvar a imagem resultante
imagemFundo.save(outputPath, quality=95)

print("Imagem final salva com sucesso em:", outputPath)
