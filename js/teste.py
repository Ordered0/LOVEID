from rembg import remove
import urllib.request
from PIL import Image

# Obter os parâmetros passados do Node.js
urllib.request.urlretrieve( 
    'https://drive.google.com/uc?id=1ryneFJLyt23ZfVDMrpEoxXbZUKdBHrlk', 
    "gfg.png") 

# Caminho de saída para a imagem resultante
output_path = "C:/LoveID/js/imagens/imagem_final.png"

# Caminho para a imagem de fundo
imagemFundoPath = "C:/LoveID/js/imagens/teste.jpg"

# Carregar a imagem original
imagemOriginal = Image.open("gfg.png")

# Remover o fundo usando rembg
imagemSemFundo = remove(imagemOriginal)

# Carregar a imagem de fundo
imagemFundo = Image.open(imagemFundoPath)

# Redimensionar a imagem sem fundo para a mesma dimensão da imagem de fundo
imagemSemFundo = imagemSemFundo.resize(imagemFundo.size)

# Criar uma nova imagem combinando a imagem de fundo e a imagem sem fundo
imagemFinal = Image.alpha_composite(imagemFundo.convert('RGBA'), imagemSemFundo)

# Salvar a imagem resultante
imagemFinal.save(output_path)

print("Imagem final salva com sucesso em:", output_path)
