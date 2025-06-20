import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RentalOrderByWithRelationInput } from "../../../inputs/RentalOrderByWithRelationInput";
import { RentalWhereInput } from "../../../inputs/RentalWhereInput";
import { RentalWhereUniqueInput } from "../../../inputs/RentalWhereUniqueInput";
import { RentalScalarFieldEnum } from "../../../../enums/RentalScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class StaffRentalArgs {
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

  @TypeGraphQL.Field(_type => [RentalScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"rental_id" | "rental_date" | "inventory_id" | "customer_id" | "return_date" | "staff_id" | "last_update"> | undefined;
}
