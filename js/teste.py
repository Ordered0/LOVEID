from rembg import remove
from PIL import Image
import sys

# Obter os parâmetros passados do Node.js
input_path = sys.argv[1]
output_path = sys.argv[2]

# Carregar a imagem
input_image = Image.open(input_path)

# Remover o fundo usando rembg
output_image = remove(input_image)

# Salvar a imagem resultante
output_image.save(output_path)