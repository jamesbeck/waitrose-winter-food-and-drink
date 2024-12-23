import knex from 'knex';

declare module 'knex/types/tables' {
  type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    loyalty_card_number?: string;
    created_at: Date;
    updated_at: Date;
  };

  type Product = {
    line_number: string;
    name: string;
    image_url?: string;
    supplier: string;
    room?: string;
    stand_number?: number;
    normal_price?: string;
    description?: string;
    website_url?: string;
    allergens?: string;
    created_at: Date;
    updated_at: Date;
  };

  type Wishlist = {
    product_line_number: string;
    user_id: number;
    created_at: Date;
    updated_at: Date;
  };

  type Event = {
    id: string;
    type: string;
    is_masterclass: boolean;
    room: string;
    floor: string;
    day: string;
    start_time: string;
    end_time: string;
    image_url?: string;
    name: string;
    description?: string;
    created_at: Date;
    updated_at: Date;
  };

  type EventProduct = {
    event_id: string;
    product_line_number: string;
  }

  type Schedule = {
    event_id: string;
    user_id: number;
    created_at: Date;
    updated_at: Date;
  }

  interface Tables {
    users: User;
    products: Product;
    wishlist: Wishlist;
    events: Event;
    event_products: EventProduct;
  }
}

export const db = knex({
  client: 'pg',
  connection: process.env.DB_CONNECTION_URL,
});
