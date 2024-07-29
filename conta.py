class conta :
    def __ini__(self, numero , titular, saldoinicial, limite):
        self.numero = numero
        self.titular = titular
        self.saldo = saldoinicial
        self.limite = limite


conta1 = conta(134, "leandro", 600.00, 50.00)

print(conta1)
