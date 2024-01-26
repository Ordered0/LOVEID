from rembg import remove
import urllib.request
from PIL import Image

# Obter os parâmetros passados do Node.js

# Caminho de saída para a imagem resultante
outputPath = "C:/Users/rkoelln/Desktop/codigos pessoais/js/imagens/imagem_final.png"

inputPath = "C:/Users/rkoelln/Desktop/58293.jpg"

# Caminho para a imagem de fundo
urllib.request.urlretrieve( 
    'https://drive.google.com/uc?id=17pLbv4YEM9wVC-zWX2CvRivfD0v5qM9l',
    "imagemFundo.png") 
# Carregar a imagem original
imagemOriginal = Image.open(inputPath) 

# Remover o fundo usando rembg
imagemSemFundo = remove(imagemOriginal).convert('RGBA')
tamanhoSemFundo = (250,270)
# Carregar a imagem de fundo
imagemFundo = Image.open("imagemFundo.png")
# Redimensionar a imagem sem fundo para a mesma dimensão da imagem de fundo
imagemSemFundo = imagemSemFundo.resize(tamanhoSemFundo)

imagemFundo.paste(imagemSemFundo,(400,10),imagemSemFundo)
# Criar uma nova imagem combinando a imagem de fundo e a imagem sem fundo
#imagemFinal = Image.alpha_composite(imagemFundo.convert('RGBA'), imagemSemFundo)

# Salvar a imagem resultante
imagemFundo.save(outputPath, quality=95)

print("Imagem final salva com sucesso em:", outputPath)
