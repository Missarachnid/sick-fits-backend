import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { createAuth } from '@keystone-next/auth';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';
import { extendGraphqlSchema } from './mutations/index';
import { Product } from './schemas/Product';
import { User } from './schemas/User';
import { ProductImage } from './schemas/ProductImage';
import { insertSeedData } from './seed-data';
import { sendPasswordResetEmail } from './lib/mail';
import { CartItem } from './schemas/CartItem';
import { OrderItem } from './schemas/OrderItem';
import { Order } from './schemas/Order';
import { Role } from './schemas/Role';
import { permissionsList } from './schemas/fields';

const databaseURL =
  process.env.DATABASE_URL ?? 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 60 * 360,
  secret: process.env.COOKIE_SECRET,
  Secure: true,
  httpOnly: true,
  SameSite: 'None',
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // ToDo: Add in initial roles here
  },
  passwordResetLink: {
    async sendToken(args) {
      // send the email
      await sendPasswordResetEmail(args.token, args.identity);
    },
  },
});
export default withAuth(
  config({
    // @ts-ignore
    server: {
      cors: {
        origin: true,
        credentials: true,
        methods: process.env.CORS_METHODS,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      // Todo: add data seeding here
      async onConnect(keystone) {
        console.log('Connected to the database');
        if (process.argv.includes('--seed-data')) {
          await insertSeedData(keystone);
        }
      },
    },
    lists: createSchema({
      // schema items go in here
      User,
      Product,
      ProductImage,
      CartItem,
      OrderItem,
      Order,
      Role,
    }),
    extendGraphqlSchema,
    ui: {
      // Todo: change this for roles
      isAccessAllowed: ({ session }) =>
        // console.log(session);
        !!session?.data,
    },
    // Todo: add session values here
    session: withItemData(statelessSessions(sessionConfig), {
      // graphql query
      User: `id name email role {${permissionsList.join(' ')}}`,
    }),
  })
);
