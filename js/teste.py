from rembg import remove
import urllib.request
from PIL import Image
import sys

# Obter os parâmetros passados do Node.js
urllib.request.urlretrieve( 
    'https://drive.google.com/uc?id=1ryneFJLyt23ZfVDMrpEoxXbZUKdBHrlk', 
    "gfg.png") 
output_path = "C:/Users/rkoelln/Desktop/imagemsemfundo.png"

print("estou aquiiii")
# Carregar a imagem
input_image = Image.open("gfg.png")

# Remover o fundo usando rembg
output_image = remove(input_image)

# Salvar a imagem resultante
output_image.save(output_path)