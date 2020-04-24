import { objectType } from 'nexus'

const Ingredients = objectType({
  name: 'Ingredients',
  definition(t) {
    t.model.id()
    t.model.title()
    t.model.quantity()
    t.model.type()
  }
})

const Recipe = objectType({
  name: 'Recipe',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.title()
    t.model.instructions()
    t.model.ingredients()
  }
})

const SimpleRecipe = objectType({
  name: 'simpleRecipe',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.title()
    t.model.ingredients()
  }
})

export const Models = [
  Ingredients,
  Recipe,
  SimpleRecipe
]