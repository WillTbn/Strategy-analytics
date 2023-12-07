#!/bin/bash
# Script para cria arquivo padrão para Vuejs3
# author @JorgeNunes
# authorEmail jlbnunes@live.com
echo "Digite o nome do arquivo (sem extensão):"
read nome_arquivo

# echo "Digite o nome da pasta(deixe em branco para o diretorio atual):"
# read nome_pasta

echo "Voce quer cria em pasta padrão vue.js(components, layouts, pages)?(deixe em branco caso não queira)"
read initial_response



#verifique o nome da pasta está em branco e define o diretório
if [ -z "$initial_response" ]; then
  diretorio=""
else
  # comp="src/components"
  # lay="src/layouts"
  # pag="src/pages"

  echo "|---------------------------------------|"
  echo "|  →  0 - components (src/components)   |"
  echo "|  →  1 - layouts (src/layouts)         |"
  echo "|  →  2 - pages (src/pages)             |"
  echo "|---------------------------------------|"
  echo "Digite qual:"
  read a_input
  while [ -n  "$a_input" ]
  do
      case "$a_input" in
          0) diretorio="src/components/";;
          1) diretorio="src/layouts/";;
          2) diretorio="src/pages/";;
          *) opc="EXCEPTION";
          echo "Não temos suporte para ${a_input}  ${opc}";;
      esac
      break
  done

fi

# Cria o arquivo Vue com o nome fornecido
arquivo="$diretorio$nome_arquivo.vue"
touch "$arquivo"

# Adiciona o conteúdo ao arquivo
echo "<template>
  <div class='$nome_arquivo'>
    <!-- Seu conteúdo HTML aqui -->
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: '$nome_arquivo',
  setup(){
    return{}
  }
  // Outras configurações do componente aqui
});
</script>

<style scoped>
  /* Estilos específicos do componente aqui */
</style>" > "$arquivo"

echo "Arquivo Vue criado com sucesso em: $arquivo"
