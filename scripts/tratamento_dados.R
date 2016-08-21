

pagamento <- read.csv("CSV/pagamentos.csv")


lda_test <- read.csv("lda_autor_conv.csv", sep = ";", encoding = "UTF-8")

require(MASS)

r <- lda(formula = Species ~ ., 
         data = iris, 
         prior = c(1,1,1)/3)


lei <- lda(formula = TEXTO_POR_AUTOR ~.,
           data = lda_test)

