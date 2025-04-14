// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

/*import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
/*export const createTable = pgTableCreator((name) => `spicyspicymeatball_${name}`);

export const posts = createTable(
  "post",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
)*/


// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  integer
} from "drizzle-orm/pg-core";
import { title } from "process";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */ 
export const createTable = pgTableCreator((name) => `spicyspicymeatball${name}`);
/*
export const images = createTable(
  "image",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    url: varchar ("url", {length: 1024}).notNull(),

    userId: varchar("userId",{length:256}).notNull(),

    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);*/

export const posts = createTable(
  "post",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    recipename: varchar("recipename", { length: 256 }),
    ingredients: varchar("ingredients", { length: 256 }),
    directions: varchar("directions", { length: 256 }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date()
    ),
  },
 
);

//1 medium spaghetti squash, Avocado oil or avocado oil spray, Sea salt and black pepper, 1 large carrot peeled and finely diced, 2 large stalk celery finely diced, 2 Tbsp garlic infused oil, 4 slices bacon/turkey bacon, 1 lb grass fed ground beef OR 1/2 lb ground pork and 1/2 lb ground beef, Sea salt and black pepper, 1/4 tsp oregano, 2 cups low FODMAP marinara sauce, Fody Foods or Rao's sensitive 1/3 cup coconut milk full fat (optional), Fresh parsley or basil for garnish
//Preheat your oven to 400°F and line a baking sheet with parchment paper. Cut the squash in half lengthwise and scoop out the seeds and strings. Spray the inside of the squash with avocado oil spray or brush with oil, and sprinkle with sea salt and black pepper. Place squash face down on the baking sheet and roast in the preheated oven for 20-25 minutes, depending on size and preference for softness. I prefer my squash al dente and roast for about 20-22 minutes. You can press down gently on the back of the squash to see if it’s tender. for the sauce: While the squash roasts, heat a large skillet over medium-hi heat and add the garlic infused oil. Once heated, add the carrot and celery to the skillet and cook until tender - about 3 minutes. Add the bacon to the skillet and cook, stirring, until about 3/4 of the way done. If the bacon renders a lot of fat, you can drain some at this point (optional). Crumble the ground meat into the skillet and sprinkle with sea salt, black pepper and the oregano. Cook, stirring, to brown.  Once the meat is browned and the bacon crisp, add in the tomato basil or marinara sauce and the coconut milk, if using. Bring to a boil while stirring occasionally, then lower the heat and simmer for 5-10 more minutes to thicken and allow the flavors to blend. Use a fork to scrape the “spaghetti” strands from the squash and place in a serving bowl. Serve topped with the Bolognese sauce and garnish with parsley or basil if desired. Enjoy