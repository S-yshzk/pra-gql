import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Address } from "../../../models/Address";
import { Payment } from "../../../models/Payment";
import { Rental } from "../../../models/Rental";
import { Staff } from "../../../models/Staff";
import { Store } from "../../../models/Store";
import { StaffPaymentArgs } from "./args/StaffPaymentArgs";
import { StaffRentalArgs } from "./args/StaffRentalArgs";
import { StaffStore_store_manager_staff_idTostaffArgs } from "./args/StaffStore_store_manager_staff_idTostaffArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Staff)
export class StaffRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Payment], {
    nullable: false
  })
  async payment(@TypeGraphQL.Root() staff: Staff, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: StaffPaymentArgs): Promise<Payment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).staff.findUniqueOrThrow({
      where: {
        staff_id: staff.staff_id,
      },
    }).payment({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Rental], {
    nullable: false
  })
  async rental(@TypeGraphQL.Root() staff: Staff, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: StaffRentalArgs): Promise<Rental[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).staff.findUniqueOrThrow({
      where: {
        staff_id: staff.staff_id,
      },
    }).rental({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Address, {
    nullable: false
  })
  async address(@TypeGraphQL.Root() staff: Staff, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Address> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).staff.findUniqueOrThrow({
      where: {
        staff_id: staff.staff_id,
      },
    }).address({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Store, {
    nullable: false
  })
  async store_staff_store_idTostore(@TypeGraphQL.Root() staff: Staff, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Store> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).staff.findUniqueOrThrow({
      where: {
        staff_id: staff.staff_id,
      },
    }).store_staff_store_idTostore({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Store, {
    nullable: true
  })
  async store_store_manager_staff_idTostaff(@TypeGraphQL.Root() staff: Staff, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: StaffStore_store_manager_staff_idTostaffArgs): Promise<Store | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).staff.findUniqueOrThrow({
      where: {
        staff_id: staff.staff_id,
      },
    }).store_store_manager_staff_idTostaff({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
