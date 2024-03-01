from rembg import remove
from PIL import Image

# Obter os parâmetros passados do Node.js

# Caminho de saída para a imagem resultante
outputPath = "C:/Users/rkoelln/Desktop/codigos pessoais/public/imagens/oi.png"

inputPath = "C:/Users/rkoelln/Desktop/codigos pessoais/public/imagens/teste.jpg"

# Caminho para a imagem de fundo

# Carregar a imagem original
imagemOriginal = Image.open(inputPath) 

# Remover o fundo usando rembg
imagemSemFundo = remove(imagemOriginal).convert('RGBA')
tamanhoSemFundo = (250,270)
# Carregar a imagem de fundo
imagemFundo = Image.open("C:/Users/rkoelln/Desktop/codigos pessoais/public/imagens/imagemFundo.png")
# Redimensionar a imagem sem fundo para a mesma dimensão da imagem de fundo
imagemSemFundo = imagemSemFundo.resize(tamanhoSemFundo)

imagemFundo.paste(imagemSemFundo,(400,10),imagemSemFundo)

# Salvar a imagem resultante
imagemFundo.save(outputPath, quality=95)

print("Imagem final salva com sucesso em:", outputPath)
