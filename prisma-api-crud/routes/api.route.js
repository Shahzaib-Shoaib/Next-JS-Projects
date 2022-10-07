const router = require("express").Router();

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// To get all products

router.get("/products", async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      include: { category: true },
    });

    const categories = await prisma.category.findMany({
      include: { products: true },
    });

    res.json({ products, categories });
  } catch (error) {
    next(error);
  }
});

// To get products by id

router.get("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
      include: { category: true },
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// To create new products

router.post("/products", async (req, res, next) => {
  try {
    const product = await prisma.product.create({
      data: req.body,
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// To delete product

router.delete("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedProduct = await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });

    res.json(deletedProduct);
  } catch (error) {
    next(error);
  }
});

// To update product

router.patch("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: req.body,
      include: {
        category: true,
      },
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
