from Cliente import Cliente

Cliente = Cliente("leandro")


## print(Cliente.__nome)

## chamando o método
print("Método nome do cliente:" , Cliente.get_nome())

Cliente.set_nome('Leando Fassina')

print("Método nome alterado do cliente:" ,Cliente.get_nome())

## usando a propriede get
print("propriedade nome do cliente:", Cliente.nome)

##usando a propriedade setter
Cliente.nome = 'arisberto'
print("propriedade nome do cliente", Cliente.nome )

----------------------------------
cliente.py
class Cliente:
    def __init__(self, nome):
        self.__nome = nome


    ## MEDODO
   
    def get_nome(self):
        return self.__nome ##.title()
    
    
    def set_nome(self,nome):
        self.__nome = nome

    @property
    def nome(self):
        return self.__nome.title()
    
    ## propriedade setter
    @nome.setter
    def nome(self,nome):
        self.__nome = nome 
