
partByEmpe <- read.csv("participanteByEmpenho.csv")

library(dplyr)

partByEmpe$vl_Empenho <- gsub(",", ".", partByEmpe$vl_Empenho)

partByEmpe$vl_Empenho <- as.integer(partByEmpe$vl_Empenho)

# --

filterNa <- na.omit(partByEmpe)

agrupaValor <- filterNa %>%
  group_by(nu_CPFCNPJ) %>%
  summarise(valortotal = sum(vl_Empenho))


# falta ter o mes

### ---------------------

agrupaLicitacao <- partByEmpe %>%
  select(nu_Licitacao, nu_CPFCNPJ, vl_Empenho)
  
#df[!duplicated(df[c("a", "b")]),]
agrupaLicitacaoDup <- agrupaLicitacao[!duplicated(agrupaLicitacao[c("nu_Licitacao", "nu_CPFCNPJ")]), ]

# quantidade de vezes que a empresa apareceu
aparecimentos <- agrupaLicitacaoDup %>%  
  group_by(nu_CPFCNPJ) %>%
  summarise(aparecimentos = n())

# contando as derrotas
agrupaLicitacaoDup2 <- agrupaLicitacaoDup %>%  
  group_by(nu_CPFCNPJ) %>%
  summarise(totalDerrotas = sum(is.na(vl_Empenho)), totalVitorias = sum(!is.na(vl_Empenho)), total = sum(n()))




###########

# Conta total vitorias e derrotas

propostas2015 <- read.csv("C:/Users/bac/workspace/hack6/topatudo/dados/propostas2015.csv")

agrupaProspostas <- propostas2015 %>%
  select(nu_CPFCNPJ, st_Proposta)

# contando as vitorias
vitorias <- propostas2015 %>%
  filter(st_Proposta == 1)

agrupaVitorias <- vitorias %>%  
  group_by(nu_CPFCNPJ) %>%
  summarise(totalVitorias = sum(n()))

# contando as derrotas
derrotas <- propostas2015 %>%
  filter(st_Proposta == 2)

agrupaDerrotas <- derrotas %>%  
  group_by(nu_CPFCNPJ) %>%
  summarise(totalDerrotas = sum(n()))

propostasTotal <- full_join(agrupaDerrotas, agrupaVitorias, by = "nu_CPFCNPJ")

propostasTotal[is.na(propostasTotal)] <- 0

write.csv2(propostasTotal, file = "propostasTotal.csv", row.names = F)

# Agrupa por tipo de licitacao
agrupaPropostasTipo <- propostas2015 %>%
  group_by(nu_CPFCNPJ, tp_Licitacao, st_Proposta) %>%
  summarise(totalVitorias = sum(n()))

tipo_modalidade_licitacao <- read.csv("C:/Users/bac/workspace/hack6/topatudo/dados/CSV/tipo_modalidade_licitacao.csv")

agrupaPropostasTipo2 <- left_join(agrupaPropostasTipo, tipo_modalidade_licitacao, by = "tp_Licitacao")

write.csv2(agrupaPropostasTipo2, file = "propostasPorTipo.csv", row.names = F)


###############

# Correlaçao de convites 

propostasConvite <- propostas2015 %>% 
  filter(tp_Licitacao == 3)

propostasConvite$id <- paste0(propostasConvite$cd_UGestora, propostasConvite$nu_Licitacao)

id <- as.data.frame(t(unique(propostasConvite$id)))

library(reshape2)

propostasConvite2 <- melt(propostasConvite)
w <- dcast(propostasConvite, nu_CPFCNPJ~nu_Licitacao)
x <- as.matrix(w[,-1])
x[is.na(x)] <- 0
v <- x %*% t(x)                                   #the magic matrix 
diag(v) <- 0                                      #repalce diagonal
dimnames(v) <- list(w[, 1], w[,1])                #name the dimensions
v

coocorrencia <- as.data.frame(v)

colnames(coocorrencia)


selecetedCoocorrencia <- coocorrencia %>%
  filter(row.names == 97542585000103)


write.csv2(coocorrencia, file = "coocorrencia.csv")
coocorrencia$"4654716000163"

Cluster <- kmeans(coocorrencia, 5)
Cluster



unique(propostasConvite$nu_CPFCNPJ)


propostasConviteGroup <- propostasConvite %>% 
  group_by(nu_CPFCNPJ) %>%
  summarise(texto = paste(id, collapse = ","))

str(propostasConviteGroup)
