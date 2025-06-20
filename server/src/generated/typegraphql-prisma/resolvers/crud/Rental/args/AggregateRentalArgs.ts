import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RentalOrderByWithRelationInput } from "../../../inputs/RentalOrderByWithRelationInput";
import { RentalWhereInput } from "../../../inputs/RentalWhereInput";
import { RentalWhereUniqueInput } from "../../../inputs/RentalWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateRentalArgs {
  @TypeGraphQL.Field(_type => RentalWhereInput, {
    nullable: true
  })
  where?: RentalWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RentalOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: RentalOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => RentalWhereUniqueInput, {
    nullable: true
  })
  cursor?: RentalWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
