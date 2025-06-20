import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RentalOrderByWithAggregationInput } from "../../../inputs/RentalOrderByWithAggregationInput";
import { RentalScalarWhereWithAggregatesInput } from "../../../inputs/RentalScalarWhereWithAggregatesInput";
import { RentalWhereInput } from "../../../inputs/RentalWhereInput";
import { RentalScalarFieldEnum } from "../../../../enums/RentalScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByRentalArgs {
  @TypeGraphQL.Field(_type => RentalWhereInput, {
    nullable: true
  })
  where?: RentalWhereInput | undefined;

  @TypeGraphQL.Field(_type => [RentalOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: RentalOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [RentalScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"rental_id" | "rental_date" | "inventory_id" | "customer_id" | "return_date" | "staff_id" | "last_update">;

  @TypeGraphQL.Field(_type => RentalScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: RentalScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
