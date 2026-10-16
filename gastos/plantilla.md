# 📝 Plantilla Diaria de Registro de Gastos

Usa esta plantilla para registrar los gastos de cada día en tu teléfono o libreta, o copia y pega el bloque al final del día.

> **Tasa de cambio de referencia:**  
> **1 EUR (€) = 4.000 COP ($)**  
> Para convertir EUR a COP: Multiplicar por 4.000  
> Para convertir COP a EUR: Dividir entre 4.000  

---

## 📋 Plantilla para Copiar y Pegar

```markdown
### 📅 Gastos Día [Número] - [Ciudad] ([Fecha: AAAA-MM-DD])

| Hora | Concepto / Lugar | Categoría | Monto (EUR) | Monto (COP) | Pagado Por | Método de Pago | Notas / Factura |
|:---:|:---|:---:|---:|---:|:---:|:---:|:---|
| 09:30 | Desayuno café y croissant | Comida | 8,00 € | $32.000 | Alan | Tarjeta Crédito | Sin maní |
| 11:00 | Tickets de Metro (x2) | Transporte | 4,20 € | $16.800 | Hillary | Contactless | Máquina estación |
| 14:00 | Almuerzo menú del día | Comida | 32,00 € | $128.000 | Alan | Tarjeta Débito | Pasta sin camarones |
| 16:30 | Entradas museo / atracción | Tours | 30,00 € | $120.000 | Hillary | Online | Reserva anticipada |
| 18:00 | Café / Gelato / Snacks | Comida | 7,50 € | $30.000 | Alan | Efectivo | Verificado alérgenos |
| 21:00 | Cena restaurante | Comida | 45,00 € | $180.000 | Alan | Tarjeta Crédito | Propina incluida |
| 23:00 | Agua y compras mini-market | Supermercado | 5,50 € | $22.000 | Hillary | Efectivo | Para el hotel |
| **TOTAL** | **Total del Día** | — | **132,20 €** | **$528.800** | — | — | — |
```

---

## 🏷️ Categorías Estandarizadas
Para mantener la coherencia con el dashboard (`docs/index.html` y `docs/data.js`), clasifica cada gasto en:
- `Vuelos` (Tiquetes, equipaje adicional)
- `Trenes` (Billetes de alta velocidad o interurbanos)
- `Hospedaje` (Hoteles, airbnb, tasas de estancia / city tax)
- `Comida` (Desayuno, almuerzo, cena, tapas, bebidas)
- `Tours` (Museos, estadios, partidos, miradores, barcos)
- `Transporte` (Metro, autobús, tranvía, taxi, transfers aeropuerto)
- `Compras` (Souvenirs, ropa, regalos, tax free)
- `Salud` (Farmacia, seguro, medicinas)
- `Otros` (Lavandería, consigna de equipaje, propinas)

---

## 💳 Formas de Pago
- **Tarjeta de Crédito:** Preferida para acumular puntos y mejor tasa bancaria. *Consejo: Seleccionar siempre pagar en EUROS en el datáfono, nunca en pesos colombianos para evitar la doble conversión abusiva.*
- **Tarjeta Débito:** Para retiros en cajeros oficiales de bancos (evitar cajeros Euronet amarillos/azules).
- **Efectivo EUR:** Mantener siempre 30-50 € en billetes pequeños para baños públicos, propinas o pequeños quioscos.
- **Apple Pay / Google Wallet:** Aceptado en prácticamente el 98% del comercio en España, Italia y Francia.

---

## ⚠️ Recordatorio Médico al Comer Fuera
- Cada vez que ingresen un gasto de comida, recuerden verificar:
  - 🚫 **Cero maní / cacahuetes / arachidi / arachides.**
  - 🍤 **No camarones para Alan.**
  - 🧾 **Guardar tickets** si la compra supera los montos mínimos para devolución de impuestos TAX FREE.
