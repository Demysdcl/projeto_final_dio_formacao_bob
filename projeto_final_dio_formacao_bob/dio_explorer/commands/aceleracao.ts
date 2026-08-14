import * as fs from 'fs';
import * as path from 'path';

interface Aceleracao {
  id: number;
  nome: string;
  tecnologia: string;
  nivel: string;
  numeroModulos: number;
  xpTotal: number;
  badgesDisponiveis: string[];
  promocoes: string[];
  vitalicio: boolean;
  livesAoVivo: string[];
}

interface AceleracoesData {
  aceleracoes: Aceleracao[];
}

export function executarComandoAceleracao(tecnologia?: string): string {
  try {
    // Carregar o arquivo JSON
    const dataPath = path.join(__dirname, '../data/trilhas_dio.json');
    const jsonData = fs.readFileSync(dataPath, 'utf-8');
    const data: AceleracoesData = JSON.parse(jsonData);

    // Buscar acelerações — filtrar por tecnologia se informada
    const aceleracoesEncontradas = tecnologia
      ? data.aceleracoes.filter(ac =>
          ac.tecnologia.toLowerCase().includes(tecnologia.toLowerCase()) ||
          ac.nome.toLowerCase().includes(tecnologia.toLowerCase())
        )
      : data.aceleracoes;

    if (aceleracoesEncontradas.length === 0) {
      return `❌ Nenhuma aceleração encontrada para a tecnologia: **${tecnologia}**\n\n` +
             `💡 Use \`/aceleracao\` sem parâmetros para ver todas as acelerações disponíveis.`;
    }

    // Cabeçalho
    let resultado = `# ⚡ Acelerações DIO - AI Powered\n\n`;

    if (tecnologia) {
      resultado += `🔍 **Filtro aplicado: ${tecnologia}**\n`;
    }

    resultado += `📚 **${aceleracoesEncontradas.length} aceleração(ões) encontrada(s)**\n\n`;
    resultado += `---\n\n`;

    aceleracoesEncontradas.forEach((ac, index) => {
      resultado += `## ${index + 1}. ${ac.nome}\n\n`;
      resultado += `### 📊 Informações Gerais\n`;
      resultado += `- **Tecnologia:** ${ac.tecnologia}\n`;
      resultado += `- **Nível:** ${ac.nivel}\n`;
      resultado += `- **Módulos:** ${ac.numeroModulos}\n`;
      resultado += `- **XP Total:** ${ac.xpTotal.toLocaleString('pt-BR')} pontos\n`;
      resultado += `- **Acesso Vitalício:** ${ac.vitalicio ? '✅ Sim' : '❌ Não'}\n\n`;

      resultado += `### 🏆 Badges Disponíveis\n`;
      ac.badgesDisponiveis.forEach(badge => {
        resultado += `- 🎖️ ${badge}\n`;
      });
      resultado += `\n`;

      if (ac.livesAoVivo.length > 0) {
        resultado += `### 🎥 Lives ao Vivo\n`;
        ac.livesAoVivo.forEach(live => {
          resultado += `- 📺 ${live}\n`;
        });
        resultado += `\n`;
      }

      if (ac.promocoes.length > 0) {
        resultado += `### 🎁 Promoções Ativas\n`;
        ac.promocoes.forEach(promo => {
          resultado += `- 🔥 ${promo}\n`;
        });
        resultado += `\n`;
      }

      resultado += `### 🎯 Próximos Passos\n`;
      resultado += `1. Inscreva-se na aceleração\n`;
      resultado += `2. Configure seu ambiente de desenvolvimento\n`;
      resultado += `3. Participe das lives ao vivo\n`;
      resultado += `4. Complete os desafios de código (use \`/desafio\`)\n`;
      resultado += `5. Obtenha seu certificado (use \`/certificado\`)\n\n`;

      if (index < aceleracoesEncontradas.length - 1) {
        resultado += `---\n\n`;
      }
    });

    return resultado;

  } catch (error) {
    return `❌ Erro ao carregar as acelerações: ${error instanceof Error ? error.message : 'Erro desconhecido'}`;
  }
}

// Made with Bob
