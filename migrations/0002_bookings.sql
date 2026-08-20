create table if not exists bookings (
  id          serial primary key,
  kind        text not null default 'private',
  name        text not null,
  contact     text not null,
  instagram   text,
  email       text,
  placement   text,
  size        text,
  styles      text,
  idea        text,
  city        text,
  when_label  text,
  budget      text,
  org_name    text,
  org_format  text,
  people      text,
  flash_id    text,
  lang        text,
  created_at  timestamptz not null default now()
);
create index if not exists bookings_created_at_idx on bookings (created_at desc);
