export const dataMock = {
  documentCategories: {
    available: {
      historico: 'Histórico Escolar',
      boletim: 'Boletim',
      declaracao: 'Declaração',
      comunicado: 'Comunicado'
    },
    upload: {
      atestado: 'Atestado Médico',
      justificativa: 'Justificativa de Falta',
      requerimento: 'Requerimento',
      outros: 'Outros Documentos'
    }
  },
  documentStatus: {
    ENVIADO: 'enviado',
    EM_ANALISE: 'em_analise',
    APROVADO: 'aprovado',
    REJEITADO: 'rejeitado'
  },
  availableDocuments: [
    {
      id: '1',
      title: 'Histórico Escolar Completo',
      type: 'pdf',
      category: 'historico',
      url: '../assets/historico_escolar.pdf',
      date: '2024-02-15',
      size: '2.3 MB',
      description: 'Histórico escolar completo com todas as disciplinas cursadas.',
      pages: 4
    },
    {
      id: '2',
      title: 'Boletim 1º Bimestre 2024',
      type: 'pdf',
      category: 'boletim',
      url: '../assets/boletim_escolar.pdf',
      date: '2024-04-10',
      size: '856 KB',
      description: 'Boletim de notas do primeiro bimestre de 2024.',
      pages: 2
    },
    {
      id: '3',
      title: 'Declaração de Matrícula',
      type: 'html',
      category: 'declaracao',
      url: '../assets/declaracao_matricula.html',
      date: '2024-05-20',
      size: '45 KB',
      description: 'Declaração oficial de matrícula para o ano letivo de 2024.'
    },
    {
      id: '5',
      title: 'Comunicado - Reunião de Pais',
      type: 'html',
      category: 'comunicado',
      url: '../assets/comunicado_reuniao.html',
      date: '2024-05-25',
      size: '32 KB',
      description: 'Comunicado sobre reunião de pais e mestres.'
    }
  ],
  uploadedDocuments: [],
  statusConfig: {
    colors: {
      enviado: '#6c757d',
      em_analise: '#fd7e14',
      aprovado: '#198754',
      rejeitado: '#dc3545'
    },
    labels: {
      enviado: 'Enviado',
      em_analise: 'Em Análise',
      aprovado: 'Aprovado',
      rejeitado: 'Rejeitado'
    },
    icons: {
      atestado: '🏥',
      justificativa: '📝',
      requerimento: '📋',
      outros: '📄'
    }
  },
  apiEndpoints: {
    login: '/api/auth/login',
    documents: '/api/student/documents',
    upload: '/api/student/documents/upload',
    status: '/api/student/documents/{id}/status'
  }
}
