import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManyStoreInput } from "../inputs/CustomerCreateManyStoreInput";

@TypeGraphQL.InputType("CustomerCreateManyStoreInputEnvelope", {})
export class CustomerCreateManyStoreInputEnvelope {
  @TypeGraphQL.Field(_type => [CustomerCreateManyStoreInput], {
    nullable: false
  })
  data!: CustomerCreateManyStoreInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
