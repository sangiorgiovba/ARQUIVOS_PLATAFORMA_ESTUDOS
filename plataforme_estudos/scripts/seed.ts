const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();

async function main() {
  try {
    const categories = [
      {
        name: "TI e software",
        subCategories: {
          create: [
            { name: "Desenvolvimento web" },
            { name: "Ciência de Dados" },
            { name: "Cíber segurança" },
            { name: "Outros" },
          ],
        },
      },
      {
        name: "Negócios",
        subCategories: {
          create: [
            { name: "Comércio eletrônico" },
            { name: "Marketing" },
            { name: "Finança" },
            { name: "Outros" },
          ],
        },
      },
      {
        name: "Projeto",
        subCategories: {
          create: [
            { name: "Design gráfico" },
            { name: "3D e animação" },
            { name: "Design de interiores" },
            { name: "Outros" },
          ],
        },
      },
      {
        name: "Saúde",
        subCategories: {
          create: [
            { name: "Fitness" },
            { name: "Yoga" },
            { name: "Nutrição" },
            { name: "Outros" },
          ],
        },
      },
    ];

 
    for (const category of categories) {
      await database.category.create({
        data: {
          name: category.name,
          subCategories: category.subCategories,
        },
        include: {
          subCategories: true,
        },
      });
    }

    await database.level.createMany({
      data: [
        { name: "Principiante" },
        { name: "Intermediária" },
        { name: "Especialista" },
        { name: "Todos os níveis" },
      ],
    });

    console.log("propagação com sucesso");
  } catch (error) {
    console.log("Falha na propagação", error);
  } finally {
    await database.$disconnect();
  }
}

main();