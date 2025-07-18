/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `Byte` scalar type represents byte value as a Buffer */
  Byte: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
  /** GraphQL Scalar representing the Prisma.Decimal type, based on Decimal.js library. */
  Decimal: { input: any; output: any; }
};

export type Actor = {
  __typename?: 'Actor';
  _count?: Maybe<ActorCount>;
  actor_id: Scalars['Int']['output'];
  film_actor: Array<Film_Actor>;
  first_name: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  last_update: Scalars['DateTimeISO']['output'];
};


export type ActorFilm_ActorArgs = {
  cursor?: InputMaybe<Film_ActorWhereUniqueInput>;
  distinct?: InputMaybe<Array<Film_ActorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Film_ActorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_ActorWhereInput>;
};

export type ActorAvgAggregate = {
  __typename?: 'ActorAvgAggregate';
  actor_id?: Maybe<Scalars['Float']['output']>;
};

export type ActorAvgOrderByAggregateInput = {
  actor_id?: InputMaybe<SortOrder>;
};

export type ActorCount = {
  __typename?: 'ActorCount';
  film_actor: Scalars['Int']['output'];
};


export type ActorCountFilm_ActorArgs = {
  where?: InputMaybe<Film_ActorWhereInput>;
};

export type ActorCountAggregate = {
  __typename?: 'ActorCountAggregate';
  _all: Scalars['Int']['output'];
  actor_id: Scalars['Int']['output'];
  first_name: Scalars['Int']['output'];
  last_name: Scalars['Int']['output'];
  last_update: Scalars['Int']['output'];
};

export type ActorCountOrderByAggregateInput = {
  actor_id?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type ActorCreateInput = {
  film_actor?: InputMaybe<Film_ActorCreateNestedManyWithoutActorInput>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type ActorCreateManyInput = {
  actor_id?: InputMaybe<Scalars['Int']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type ActorCreateNestedOneWithoutFilm_ActorInput = {
  connect?: InputMaybe<ActorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActorCreateOrConnectWithoutFilm_ActorInput>;
  create?: InputMaybe<ActorCreateWithoutFilm_ActorInput>;
};

export type ActorCreateOrConnectWithoutFilm_ActorInput = {
  create: ActorCreateWithoutFilm_ActorInput;
  where: ActorWhereUniqueInput;
};

export type ActorCreateWithoutFilm_ActorInput = {
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type ActorGroupBy = {
  __typename?: 'ActorGroupBy';
  _avg?: Maybe<ActorAvgAggregate>;
  _count?: Maybe<ActorCountAggregate>;
  _max?: Maybe<ActorMaxAggregate>;
  _min?: Maybe<ActorMinAggregate>;
  _sum?: Maybe<ActorSumAggregate>;
  actor_id: Scalars['Int']['output'];
  first_name: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  last_update: Scalars['DateTimeISO']['output'];
};

export type ActorMaxAggregate = {
  __typename?: 'ActorMaxAggregate';
  actor_id?: Maybe<Scalars['Int']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type ActorMaxOrderByAggregateInput = {
  actor_id?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type ActorMinAggregate = {
  __typename?: 'ActorMinAggregate';
  actor_id?: Maybe<Scalars['Int']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type ActorMinOrderByAggregateInput = {
  actor_id?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type ActorOrderByWithAggregationInput = {
  _avg?: InputMaybe<ActorAvgOrderByAggregateInput>;
  _count?: InputMaybe<ActorCountOrderByAggregateInput>;
  _max?: InputMaybe<ActorMaxOrderByAggregateInput>;
  _min?: InputMaybe<ActorMinOrderByAggregateInput>;
  _sum?: InputMaybe<ActorSumOrderByAggregateInput>;
  actor_id?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type ActorOrderByWithRelationInput = {
  actor_id?: InputMaybe<SortOrder>;
  film_actor?: InputMaybe<Film_ActorOrderByRelationAggregateInput>;
  first_name?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type ActorRelationFilter = {
  is?: InputMaybe<ActorWhereInput>;
  isNot?: InputMaybe<ActorWhereInput>;
};

export enum ActorScalarFieldEnum {
  ActorId = 'actor_id',
  FirstName = 'first_name',
  LastName = 'last_name',
  LastUpdate = 'last_update'
}

export type ActorScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ActorScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ActorScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ActorScalarWhereWithAggregatesInput>>;
  actor_id?: InputMaybe<IntWithAggregatesFilter>;
  first_name?: InputMaybe<StringWithAggregatesFilter>;
  last_name?: InputMaybe<StringWithAggregatesFilter>;
  last_update?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ActorSumAggregate = {
  __typename?: 'ActorSumAggregate';
  actor_id?: Maybe<Scalars['Int']['output']>;
};

export type ActorSumOrderByAggregateInput = {
  actor_id?: InputMaybe<SortOrder>;
};

export type ActorUpdateInput = {
  film_actor?: InputMaybe<Film_ActorUpdateManyWithoutActorNestedInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ActorUpdateManyMutationInput = {
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ActorUpdateOneRequiredWithoutFilm_ActorNestedInput = {
  connect?: InputMaybe<ActorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ActorCreateOrConnectWithoutFilm_ActorInput>;
  create?: InputMaybe<ActorCreateWithoutFilm_ActorInput>;
  update?: InputMaybe<ActorUpdateToOneWithWhereWithoutFilm_ActorInput>;
  upsert?: InputMaybe<ActorUpsertWithoutFilm_ActorInput>;
};

export type ActorUpdateToOneWithWhereWithoutFilm_ActorInput = {
  data: ActorUpdateWithoutFilm_ActorInput;
  where?: InputMaybe<ActorWhereInput>;
};

export type ActorUpdateWithoutFilm_ActorInput = {
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ActorUpsertWithoutFilm_ActorInput = {
  create: ActorCreateWithoutFilm_ActorInput;
  update: ActorUpdateWithoutFilm_ActorInput;
  where?: InputMaybe<ActorWhereInput>;
};

export type ActorWhereInput = {
  AND?: InputMaybe<Array<ActorWhereInput>>;
  NOT?: InputMaybe<Array<ActorWhereInput>>;
  OR?: InputMaybe<Array<ActorWhereInput>>;
  actor_id?: InputMaybe<IntFilter>;
  film_actor?: InputMaybe<Film_ActorListRelationFilter>;
  first_name?: InputMaybe<StringFilter>;
  last_name?: InputMaybe<StringFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
};

export type ActorWhereUniqueInput = {
  AND?: InputMaybe<Array<ActorWhereInput>>;
  NOT?: InputMaybe<Array<ActorWhereInput>>;
  OR?: InputMaybe<Array<ActorWhereInput>>;
  actor_id?: InputMaybe<Scalars['Int']['input']>;
  film_actor?: InputMaybe<Film_ActorListRelationFilter>;
  first_name?: InputMaybe<StringFilter>;
  last_name?: InputMaybe<StringFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
};

export type Address = {
  __typename?: 'Address';
  _count?: Maybe<AddressCount>;
  address: Scalars['String']['output'];
  address2?: Maybe<Scalars['String']['output']>;
  address_id: Scalars['Int']['output'];
  city: City;
  city_id: Scalars['Int']['output'];
  customer: Array<Customer>;
  district: Scalars['String']['output'];
  last_update: Scalars['DateTimeISO']['output'];
  phone: Scalars['String']['output'];
  postal_code?: Maybe<Scalars['String']['output']>;
  staff: Array<Staff>;
  store: Array<Store>;
};


export type AddressCustomerArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};


export type AddressStaffArgs = {
  cursor?: InputMaybe<StaffWhereUniqueInput>;
  distinct?: InputMaybe<Array<StaffScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StaffOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StaffWhereInput>;
};


export type AddressStoreArgs = {
  cursor?: InputMaybe<StoreWhereUniqueInput>;
  distinct?: InputMaybe<Array<StoreScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StoreOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StoreWhereInput>;
};

export type AddressAvgAggregate = {
  __typename?: 'AddressAvgAggregate';
  address_id?: Maybe<Scalars['Float']['output']>;
  city_id?: Maybe<Scalars['Float']['output']>;
};

export type AddressAvgOrderByAggregateInput = {
  address_id?: InputMaybe<SortOrder>;
  city_id?: InputMaybe<SortOrder>;
};

export type AddressCount = {
  __typename?: 'AddressCount';
  customer: Scalars['Int']['output'];
  staff: Scalars['Int']['output'];
  store: Scalars['Int']['output'];
};


export type AddressCountCustomerArgs = {
  where?: InputMaybe<CustomerWhereInput>;
};


export type AddressCountStaffArgs = {
  where?: InputMaybe<StaffWhereInput>;
};


export type AddressCountStoreArgs = {
  where?: InputMaybe<StoreWhereInput>;
};

export type AddressCountAggregate = {
  __typename?: 'AddressCountAggregate';
  _all: Scalars['Int']['output'];
  address: Scalars['Int']['output'];
  address2: Scalars['Int']['output'];
  address_id: Scalars['Int']['output'];
  city_id: Scalars['Int']['output'];
  district: Scalars['Int']['output'];
  last_update: Scalars['Int']['output'];
  phone: Scalars['Int']['output'];
  postal_code: Scalars['Int']['output'];
};

export type AddressCountOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  address2?: InputMaybe<SortOrder>;
  address_id?: InputMaybe<SortOrder>;
  city_id?: InputMaybe<SortOrder>;
  district?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  postal_code?: InputMaybe<SortOrder>;
};

export type AddressCreateNestedManyWithoutCityInput = {
  connect?: InputMaybe<Array<AddressWhereUniqueInput>>;
};

export type AddressCreateNestedOneWithoutCustomerInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
};

export type AddressCreateNestedOneWithoutStaffInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
};

export type AddressCreateNestedOneWithoutStoreInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
};

export type AddressGroupBy = {
  __typename?: 'AddressGroupBy';
  _avg?: Maybe<AddressAvgAggregate>;
  _count?: Maybe<AddressCountAggregate>;
  _max?: Maybe<AddressMaxAggregate>;
  _min?: Maybe<AddressMinAggregate>;
  _sum?: Maybe<AddressSumAggregate>;
  address: Scalars['String']['output'];
  address2?: Maybe<Scalars['String']['output']>;
  address_id: Scalars['Int']['output'];
  city_id: Scalars['Int']['output'];
  district: Scalars['String']['output'];
  last_update: Scalars['DateTimeISO']['output'];
  phone: Scalars['String']['output'];
  postal_code?: Maybe<Scalars['String']['output']>;
};

export type AddressListRelationFilter = {
  every?: InputMaybe<AddressWhereInput>;
  none?: InputMaybe<AddressWhereInput>;
  some?: InputMaybe<AddressWhereInput>;
};

export type AddressMaxAggregate = {
  __typename?: 'AddressMaxAggregate';
  address?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  address_id?: Maybe<Scalars['Int']['output']>;
  city_id?: Maybe<Scalars['Int']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
};

export type AddressMaxOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  address2?: InputMaybe<SortOrder>;
  address_id?: InputMaybe<SortOrder>;
  city_id?: InputMaybe<SortOrder>;
  district?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  postal_code?: InputMaybe<SortOrder>;
};

export type AddressMinAggregate = {
  __typename?: 'AddressMinAggregate';
  address?: Maybe<Scalars['String']['output']>;
  address2?: Maybe<Scalars['String']['output']>;
  address_id?: Maybe<Scalars['Int']['output']>;
  city_id?: Maybe<Scalars['Int']['output']>;
  district?: Maybe<Scalars['String']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
};

export type AddressMinOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  address2?: InputMaybe<SortOrder>;
  address_id?: InputMaybe<SortOrder>;
  city_id?: InputMaybe<SortOrder>;
  district?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  postal_code?: InputMaybe<SortOrder>;
};

export type AddressOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AddressOrderByWithAggregationInput = {
  _avg?: InputMaybe<AddressAvgOrderByAggregateInput>;
  _count?: InputMaybe<AddressCountOrderByAggregateInput>;
  _max?: InputMaybe<AddressMaxOrderByAggregateInput>;
  _min?: InputMaybe<AddressMinOrderByAggregateInput>;
  _sum?: InputMaybe<AddressSumOrderByAggregateInput>;
  address?: InputMaybe<SortOrder>;
  address2?: InputMaybe<SortOrderInput>;
  address_id?: InputMaybe<SortOrder>;
  city_id?: InputMaybe<SortOrder>;
  district?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  postal_code?: InputMaybe<SortOrderInput>;
};

export type AddressOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  address2?: InputMaybe<SortOrderInput>;
  address_id?: InputMaybe<SortOrder>;
  city?: InputMaybe<CityOrderByWithRelationInput>;
  city_id?: InputMaybe<SortOrder>;
  customer?: InputMaybe<CustomerOrderByRelationAggregateInput>;
  district?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  postal_code?: InputMaybe<SortOrderInput>;
  staff?: InputMaybe<StaffOrderByRelationAggregateInput>;
  store?: InputMaybe<StoreOrderByRelationAggregateInput>;
};

export type AddressRelationFilter = {
  is?: InputMaybe<AddressWhereInput>;
  isNot?: InputMaybe<AddressWhereInput>;
};

export enum AddressScalarFieldEnum {
  Address = 'address',
  Address2 = 'address2',
  AddressId = 'address_id',
  CityId = 'city_id',
  District = 'district',
  LastUpdate = 'last_update',
  Phone = 'phone',
  PostalCode = 'postal_code'
}

export type AddressScalarWhereInput = {
  AND?: InputMaybe<Array<AddressScalarWhereInput>>;
  NOT?: InputMaybe<Array<AddressScalarWhereInput>>;
  OR?: InputMaybe<Array<AddressScalarWhereInput>>;
  address?: InputMaybe<StringFilter>;
  address2?: InputMaybe<StringNullableFilter>;
  address_id?: InputMaybe<IntFilter>;
  city_id?: InputMaybe<IntFilter>;
  district?: InputMaybe<StringFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  phone?: InputMaybe<StringFilter>;
  postal_code?: InputMaybe<StringNullableFilter>;
};

export type AddressScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AddressScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AddressScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AddressScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringWithAggregatesFilter>;
  address2?: InputMaybe<StringNullableWithAggregatesFilter>;
  address_id?: InputMaybe<IntWithAggregatesFilter>;
  city_id?: InputMaybe<IntWithAggregatesFilter>;
  district?: InputMaybe<StringWithAggregatesFilter>;
  last_update?: InputMaybe<DateTimeWithAggregatesFilter>;
  phone?: InputMaybe<StringWithAggregatesFilter>;
  postal_code?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type AddressSumAggregate = {
  __typename?: 'AddressSumAggregate';
  address_id?: Maybe<Scalars['Int']['output']>;
  city_id?: Maybe<Scalars['Int']['output']>;
};

export type AddressSumOrderByAggregateInput = {
  address_id?: InputMaybe<SortOrder>;
  city_id?: InputMaybe<SortOrder>;
};

export type AddressUpdateInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  address2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<CityUpdateOneRequiredWithoutAddressNestedInput>;
  customer?: InputMaybe<CustomerUpdateManyWithoutAddressNestedInput>;
  district?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  postal_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateManyWithoutAddressNestedInput>;
  store?: InputMaybe<StoreUpdateManyWithoutAddressNestedInput>;
};

export type AddressUpdateManyMutationInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  address2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  district?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  postal_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type AddressUpdateManyWithWhereWithoutCityInput = {
  data: AddressUpdateManyMutationInput;
  where: AddressScalarWhereInput;
};

export type AddressUpdateManyWithoutCityNestedInput = {
  connect?: InputMaybe<Array<AddressWhereUniqueInput>>;
  delete?: InputMaybe<Array<AddressWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AddressScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AddressWhereUniqueInput>>;
  set?: InputMaybe<Array<AddressWhereUniqueInput>>;
  update?: InputMaybe<Array<AddressUpdateWithWhereUniqueWithoutCityInput>>;
  updateMany?: InputMaybe<Array<AddressUpdateManyWithWhereWithoutCityInput>>;
};

export type AddressUpdateOneRequiredWithoutCustomerNestedInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  update?: InputMaybe<AddressUpdateToOneWithWhereWithoutCustomerInput>;
};

export type AddressUpdateOneRequiredWithoutStaffNestedInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  update?: InputMaybe<AddressUpdateToOneWithWhereWithoutStaffInput>;
};

export type AddressUpdateOneRequiredWithoutStoreNestedInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  update?: InputMaybe<AddressUpdateToOneWithWhereWithoutStoreInput>;
};

export type AddressUpdateToOneWithWhereWithoutCustomerInput = {
  data: AddressUpdateWithoutCustomerInput;
  where?: InputMaybe<AddressWhereInput>;
};

export type AddressUpdateToOneWithWhereWithoutStaffInput = {
  data: AddressUpdateWithoutStaffInput;
  where?: InputMaybe<AddressWhereInput>;
};

export type AddressUpdateToOneWithWhereWithoutStoreInput = {
  data: AddressUpdateWithoutStoreInput;
  where?: InputMaybe<AddressWhereInput>;
};

export type AddressUpdateWithWhereUniqueWithoutCityInput = {
  data: AddressUpdateWithoutCityInput;
  where: AddressWhereUniqueInput;
};

export type AddressUpdateWithoutCityInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  address2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  customer?: InputMaybe<CustomerUpdateManyWithoutAddressNestedInput>;
  district?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  postal_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateManyWithoutAddressNestedInput>;
  store?: InputMaybe<StoreUpdateManyWithoutAddressNestedInput>;
};

export type AddressUpdateWithoutCustomerInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  address2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<CityUpdateOneRequiredWithoutAddressNestedInput>;
  district?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  postal_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateManyWithoutAddressNestedInput>;
  store?: InputMaybe<StoreUpdateManyWithoutAddressNestedInput>;
};

export type AddressUpdateWithoutStaffInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  address2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<CityUpdateOneRequiredWithoutAddressNestedInput>;
  customer?: InputMaybe<CustomerUpdateManyWithoutAddressNestedInput>;
  district?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  postal_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  store?: InputMaybe<StoreUpdateManyWithoutAddressNestedInput>;
};

export type AddressUpdateWithoutStoreInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  address2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  city?: InputMaybe<CityUpdateOneRequiredWithoutAddressNestedInput>;
  customer?: InputMaybe<CustomerUpdateManyWithoutAddressNestedInput>;
  district?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  phone?: InputMaybe<StringFieldUpdateOperationsInput>;
  postal_code?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateManyWithoutAddressNestedInput>;
};

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>;
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  OR?: InputMaybe<Array<AddressWhereInput>>;
  address?: InputMaybe<StringFilter>;
  address2?: InputMaybe<StringNullableFilter>;
  address_id?: InputMaybe<IntFilter>;
  city?: InputMaybe<CityRelationFilter>;
  city_id?: InputMaybe<IntFilter>;
  customer?: InputMaybe<CustomerListRelationFilter>;
  district?: InputMaybe<StringFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  phone?: InputMaybe<StringFilter>;
  postal_code?: InputMaybe<StringNullableFilter>;
  staff?: InputMaybe<StaffListRelationFilter>;
  store?: InputMaybe<StoreListRelationFilter>;
};

export type AddressWhereUniqueInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>;
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  OR?: InputMaybe<Array<AddressWhereInput>>;
  address?: InputMaybe<StringFilter>;
  address2?: InputMaybe<StringNullableFilter>;
  address_id?: InputMaybe<Scalars['Int']['input']>;
  city?: InputMaybe<CityRelationFilter>;
  city_id?: InputMaybe<IntFilter>;
  customer?: InputMaybe<CustomerListRelationFilter>;
  district?: InputMaybe<StringFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  phone?: InputMaybe<StringFilter>;
  postal_code?: InputMaybe<StringNullableFilter>;
  staff?: InputMaybe<StaffListRelationFilter>;
  store?: InputMaybe<StoreListRelationFilter>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateActor = {
  __typename?: 'AggregateActor';
  _avg?: Maybe<ActorAvgAggregate>;
  _count?: Maybe<ActorCountAggregate>;
  _max?: Maybe<ActorMaxAggregate>;
  _min?: Maybe<ActorMinAggregate>;
  _sum?: Maybe<ActorSumAggregate>;
};

export type AggregateAddress = {
  __typename?: 'AggregateAddress';
  _avg?: Maybe<AddressAvgAggregate>;
  _count?: Maybe<AddressCountAggregate>;
  _max?: Maybe<AddressMaxAggregate>;
  _min?: Maybe<AddressMinAggregate>;
  _sum?: Maybe<AddressSumAggregate>;
};

export type AggregateCategory = {
  __typename?: 'AggregateCategory';
  _avg?: Maybe<CategoryAvgAggregate>;
  _count?: Maybe<CategoryCountAggregate>;
  _max?: Maybe<CategoryMaxAggregate>;
  _min?: Maybe<CategoryMinAggregate>;
  _sum?: Maybe<CategorySumAggregate>;
};

export type AggregateCity = {
  __typename?: 'AggregateCity';
  _avg?: Maybe<CityAvgAggregate>;
  _count?: Maybe<CityCountAggregate>;
  _max?: Maybe<CityMaxAggregate>;
  _min?: Maybe<CityMinAggregate>;
  _sum?: Maybe<CitySumAggregate>;
};

export type AggregateCountry = {
  __typename?: 'AggregateCountry';
  _avg?: Maybe<CountryAvgAggregate>;
  _count?: Maybe<CountryCountAggregate>;
  _max?: Maybe<CountryMaxAggregate>;
  _min?: Maybe<CountryMinAggregate>;
  _sum?: Maybe<CountrySumAggregate>;
};

export type AggregateCustomer = {
  __typename?: 'AggregateCustomer';
  _avg?: Maybe<CustomerAvgAggregate>;
  _count?: Maybe<CustomerCountAggregate>;
  _max?: Maybe<CustomerMaxAggregate>;
  _min?: Maybe<CustomerMinAggregate>;
  _sum?: Maybe<CustomerSumAggregate>;
};

export type AggregateFilm = {
  __typename?: 'AggregateFilm';
  _avg?: Maybe<FilmAvgAggregate>;
  _count?: Maybe<FilmCountAggregate>;
  _max?: Maybe<FilmMaxAggregate>;
  _min?: Maybe<FilmMinAggregate>;
  _sum?: Maybe<FilmSumAggregate>;
};

export type AggregateFilm_Actor = {
  __typename?: 'AggregateFilm_actor';
  _avg?: Maybe<Film_ActorAvgAggregate>;
  _count?: Maybe<Film_ActorCountAggregate>;
  _max?: Maybe<Film_ActorMaxAggregate>;
  _min?: Maybe<Film_ActorMinAggregate>;
  _sum?: Maybe<Film_ActorSumAggregate>;
};

export type AggregateFilm_Category = {
  __typename?: 'AggregateFilm_category';
  _avg?: Maybe<Film_CategoryAvgAggregate>;
  _count?: Maybe<Film_CategoryCountAggregate>;
  _max?: Maybe<Film_CategoryMaxAggregate>;
  _min?: Maybe<Film_CategoryMinAggregate>;
  _sum?: Maybe<Film_CategorySumAggregate>;
};

export type AggregateFilm_Text = {
  __typename?: 'AggregateFilm_text';
  _avg?: Maybe<Film_TextAvgAggregate>;
  _count?: Maybe<Film_TextCountAggregate>;
  _max?: Maybe<Film_TextMaxAggregate>;
  _min?: Maybe<Film_TextMinAggregate>;
  _sum?: Maybe<Film_TextSumAggregate>;
};

export type AggregateInventory = {
  __typename?: 'AggregateInventory';
  _avg?: Maybe<InventoryAvgAggregate>;
  _count?: Maybe<InventoryCountAggregate>;
  _max?: Maybe<InventoryMaxAggregate>;
  _min?: Maybe<InventoryMinAggregate>;
  _sum?: Maybe<InventorySumAggregate>;
};

export type AggregateLanguage = {
  __typename?: 'AggregateLanguage';
  _avg?: Maybe<LanguageAvgAggregate>;
  _count?: Maybe<LanguageCountAggregate>;
  _max?: Maybe<LanguageMaxAggregate>;
  _min?: Maybe<LanguageMinAggregate>;
  _sum?: Maybe<LanguageSumAggregate>;
};

export type AggregatePayment = {
  __typename?: 'AggregatePayment';
  _avg?: Maybe<PaymentAvgAggregate>;
  _count?: Maybe<PaymentCountAggregate>;
  _max?: Maybe<PaymentMaxAggregate>;
  _min?: Maybe<PaymentMinAggregate>;
  _sum?: Maybe<PaymentSumAggregate>;
};

export type AggregateRental = {
  __typename?: 'AggregateRental';
  _avg?: Maybe<RentalAvgAggregate>;
  _count?: Maybe<RentalCountAggregate>;
  _max?: Maybe<RentalMaxAggregate>;
  _min?: Maybe<RentalMinAggregate>;
  _sum?: Maybe<RentalSumAggregate>;
};

export type AggregateStaff = {
  __typename?: 'AggregateStaff';
  _avg?: Maybe<StaffAvgAggregate>;
  _count?: Maybe<StaffCountAggregate>;
  _max?: Maybe<StaffMaxAggregate>;
  _min?: Maybe<StaffMinAggregate>;
  _sum?: Maybe<StaffSumAggregate>;
};

export type AggregateStore = {
  __typename?: 'AggregateStore';
  _avg?: Maybe<StoreAvgAggregate>;
  _count?: Maybe<StoreCountAggregate>;
  _max?: Maybe<StoreMaxAggregate>;
  _min?: Maybe<StoreMinAggregate>;
  _sum?: Maybe<StoreSumAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type BytesNullableFilter = {
  equals?: InputMaybe<Scalars['Byte']['input']>;
  in?: InputMaybe<Array<Scalars['Byte']['input']>>;
  not?: InputMaybe<NestedBytesNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Byte']['input']>>;
};

export type BytesNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBytesNullableFilter>;
  _min?: InputMaybe<NestedBytesNullableFilter>;
  equals?: InputMaybe<Scalars['Byte']['input']>;
  in?: InputMaybe<Array<Scalars['Byte']['input']>>;
  not?: InputMaybe<NestedBytesNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Byte']['input']>>;
};

export type Category = {
  __typename?: 'Category';
  _count?: Maybe<CategoryCount>;
  category_id: Scalars['Int']['output'];
  film_category: Array<Film_Category>;
  last_update: Scalars['DateTimeISO']['output'];
  name: Scalars['String']['output'];
};


export type CategoryFilm_CategoryArgs = {
  cursor?: InputMaybe<Film_CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<Film_CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Film_CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_CategoryWhereInput>;
};

export type CategoryAvgAggregate = {
  __typename?: 'CategoryAvgAggregate';
  category_id?: Maybe<Scalars['Float']['output']>;
};

export type CategoryAvgOrderByAggregateInput = {
  category_id?: InputMaybe<SortOrder>;
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  film_category: Scalars['Int']['output'];
};


export type CategoryCountFilm_CategoryArgs = {
  where?: InputMaybe<Film_CategoryWhereInput>;
};

export type CategoryCountAggregate = {
  __typename?: 'CategoryCountAggregate';
  _all: Scalars['Int']['output'];
  category_id: Scalars['Int']['output'];
  last_update: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type CategoryCountOrderByAggregateInput = {
  category_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CategoryCreateInput = {
  film_category?: InputMaybe<Film_CategoryCreateNestedManyWithoutCategoryInput>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  name: Scalars['String']['input'];
};

export type CategoryCreateManyInput = {
  category_id?: InputMaybe<Scalars['Int']['input']>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  name: Scalars['String']['input'];
};

export type CategoryCreateNestedOneWithoutFilm_CategoryInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutFilm_CategoryInput>;
  create?: InputMaybe<CategoryCreateWithoutFilm_CategoryInput>;
};

export type CategoryCreateOrConnectWithoutFilm_CategoryInput = {
  create: CategoryCreateWithoutFilm_CategoryInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryCreateWithoutFilm_CategoryInput = {
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  name: Scalars['String']['input'];
};

export type CategoryGroupBy = {
  __typename?: 'CategoryGroupBy';
  _avg?: Maybe<CategoryAvgAggregate>;
  _count?: Maybe<CategoryCountAggregate>;
  _max?: Maybe<CategoryMaxAggregate>;
  _min?: Maybe<CategoryMinAggregate>;
  _sum?: Maybe<CategorySumAggregate>;
  category_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
  name: Scalars['String']['output'];
};

export type CategoryMaxAggregate = {
  __typename?: 'CategoryMaxAggregate';
  category_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CategoryMaxOrderByAggregateInput = {
  category_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CategoryMinAggregate = {
  __typename?: 'CategoryMinAggregate';
  category_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CategoryMinOrderByAggregateInput = {
  category_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithAggregationInput = {
  _avg?: InputMaybe<CategoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<CategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<CategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<CategoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<CategorySumOrderByAggregateInput>;
  category_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  category_id?: InputMaybe<SortOrder>;
  film_category?: InputMaybe<Film_CategoryOrderByRelationAggregateInput>;
  last_update?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type CategoryRelationFilter = {
  is?: InputMaybe<CategoryWhereInput>;
  isNot?: InputMaybe<CategoryWhereInput>;
};

export enum CategoryScalarFieldEnum {
  CategoryId = 'category_id',
  LastUpdate = 'last_update',
  Name = 'name'
}

export type CategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CategoryScalarWhereWithAggregatesInput>>;
  category_id?: InputMaybe<IntWithAggregatesFilter>;
  last_update?: InputMaybe<DateTimeWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type CategorySumAggregate = {
  __typename?: 'CategorySumAggregate';
  category_id?: Maybe<Scalars['Int']['output']>;
};

export type CategorySumOrderByAggregateInput = {
  category_id?: InputMaybe<SortOrder>;
};

export type CategoryUpdateInput = {
  film_category?: InputMaybe<Film_CategoryUpdateManyWithoutCategoryNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateManyMutationInput = {
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpdateOneRequiredWithoutFilm_CategoryNestedInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CategoryCreateOrConnectWithoutFilm_CategoryInput>;
  create?: InputMaybe<CategoryCreateWithoutFilm_CategoryInput>;
  update?: InputMaybe<CategoryUpdateToOneWithWhereWithoutFilm_CategoryInput>;
  upsert?: InputMaybe<CategoryUpsertWithoutFilm_CategoryInput>;
};

export type CategoryUpdateToOneWithWhereWithoutFilm_CategoryInput = {
  data: CategoryUpdateWithoutFilm_CategoryInput;
  where?: InputMaybe<CategoryWhereInput>;
};

export type CategoryUpdateWithoutFilm_CategoryInput = {
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type CategoryUpsertWithoutFilm_CategoryInput = {
  create: CategoryCreateWithoutFilm_CategoryInput;
  update: CategoryUpdateWithoutFilm_CategoryInput;
  where?: InputMaybe<CategoryWhereInput>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  category_id?: InputMaybe<IntFilter>;
  film_category?: InputMaybe<Film_CategoryListRelationFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  name?: InputMaybe<StringFilter>;
};

export type CategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  category_id?: InputMaybe<Scalars['Int']['input']>;
  film_category?: InputMaybe<Film_CategoryListRelationFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  name?: InputMaybe<StringFilter>;
};

export type City = {
  __typename?: 'City';
  _count?: Maybe<CityCount>;
  address: Array<Address>;
  city: Scalars['String']['output'];
  city_id: Scalars['Int']['output'];
  country: Country;
  country_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
};


export type CityAddressArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddressWhereInput>;
};

export type CityAvgAggregate = {
  __typename?: 'CityAvgAggregate';
  city_id?: Maybe<Scalars['Float']['output']>;
  country_id?: Maybe<Scalars['Float']['output']>;
};

export type CityAvgOrderByAggregateInput = {
  city_id?: InputMaybe<SortOrder>;
  country_id?: InputMaybe<SortOrder>;
};

export type CityCount = {
  __typename?: 'CityCount';
  address: Scalars['Int']['output'];
};


export type CityCountAddressArgs = {
  where?: InputMaybe<AddressWhereInput>;
};

export type CityCountAggregate = {
  __typename?: 'CityCountAggregate';
  _all: Scalars['Int']['output'];
  city: Scalars['Int']['output'];
  city_id: Scalars['Int']['output'];
  country_id: Scalars['Int']['output'];
  last_update: Scalars['Int']['output'];
};

export type CityCountOrderByAggregateInput = {
  city?: InputMaybe<SortOrder>;
  city_id?: InputMaybe<SortOrder>;
  country_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type CityCreateInput = {
  address?: InputMaybe<AddressCreateNestedManyWithoutCityInput>;
  city: Scalars['String']['input'];
  country: CountryCreateNestedOneWithoutCityInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CityCreateManyCountryInput = {
  city: Scalars['String']['input'];
  city_id?: InputMaybe<Scalars['Int']['input']>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CityCreateManyCountryInputEnvelope = {
  data: Array<CityCreateManyCountryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CityCreateManyInput = {
  city: Scalars['String']['input'];
  city_id?: InputMaybe<Scalars['Int']['input']>;
  country_id: Scalars['Int']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CityCreateNestedManyWithoutCountryInput = {
  connect?: InputMaybe<Array<CityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CityCreateOrConnectWithoutCountryInput>>;
  create?: InputMaybe<Array<CityCreateWithoutCountryInput>>;
  createMany?: InputMaybe<CityCreateManyCountryInputEnvelope>;
};

export type CityCreateOrConnectWithoutAddressInput = {
  create: CityCreateWithoutAddressInput;
  where: CityWhereUniqueInput;
};

export type CityCreateOrConnectWithoutCountryInput = {
  create: CityCreateWithoutCountryInput;
  where: CityWhereUniqueInput;
};

export type CityCreateWithoutAddressInput = {
  city: Scalars['String']['input'];
  country: CountryCreateNestedOneWithoutCityInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CityCreateWithoutCountryInput = {
  address?: InputMaybe<AddressCreateNestedManyWithoutCityInput>;
  city: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CityGroupBy = {
  __typename?: 'CityGroupBy';
  _avg?: Maybe<CityAvgAggregate>;
  _count?: Maybe<CityCountAggregate>;
  _max?: Maybe<CityMaxAggregate>;
  _min?: Maybe<CityMinAggregate>;
  _sum?: Maybe<CitySumAggregate>;
  city: Scalars['String']['output'];
  city_id: Scalars['Int']['output'];
  country_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
};

export type CityListRelationFilter = {
  every?: InputMaybe<CityWhereInput>;
  none?: InputMaybe<CityWhereInput>;
  some?: InputMaybe<CityWhereInput>;
};

export type CityMaxAggregate = {
  __typename?: 'CityMaxAggregate';
  city?: Maybe<Scalars['String']['output']>;
  city_id?: Maybe<Scalars['Int']['output']>;
  country_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type CityMaxOrderByAggregateInput = {
  city?: InputMaybe<SortOrder>;
  city_id?: InputMaybe<SortOrder>;
  country_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type CityMinAggregate = {
  __typename?: 'CityMinAggregate';
  city?: Maybe<Scalars['String']['output']>;
  city_id?: Maybe<Scalars['Int']['output']>;
  country_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type CityMinOrderByAggregateInput = {
  city?: InputMaybe<SortOrder>;
  city_id?: InputMaybe<SortOrder>;
  country_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type CityOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CityOrderByWithAggregationInput = {
  _avg?: InputMaybe<CityAvgOrderByAggregateInput>;
  _count?: InputMaybe<CityCountOrderByAggregateInput>;
  _max?: InputMaybe<CityMaxOrderByAggregateInput>;
  _min?: InputMaybe<CityMinOrderByAggregateInput>;
  _sum?: InputMaybe<CitySumOrderByAggregateInput>;
  city?: InputMaybe<SortOrder>;
  city_id?: InputMaybe<SortOrder>;
  country_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type CityOrderByWithRelationInput = {
  address?: InputMaybe<AddressOrderByRelationAggregateInput>;
  city?: InputMaybe<SortOrder>;
  city_id?: InputMaybe<SortOrder>;
  country?: InputMaybe<CountryOrderByWithRelationInput>;
  country_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type CityRelationFilter = {
  is?: InputMaybe<CityWhereInput>;
  isNot?: InputMaybe<CityWhereInput>;
};

export enum CityScalarFieldEnum {
  City = 'city',
  CityId = 'city_id',
  CountryId = 'country_id',
  LastUpdate = 'last_update'
}

export type CityScalarWhereInput = {
  AND?: InputMaybe<Array<CityScalarWhereInput>>;
  NOT?: InputMaybe<Array<CityScalarWhereInput>>;
  OR?: InputMaybe<Array<CityScalarWhereInput>>;
  city?: InputMaybe<StringFilter>;
  city_id?: InputMaybe<IntFilter>;
  country_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
};

export type CityScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CityScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CityScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CityScalarWhereWithAggregatesInput>>;
  city?: InputMaybe<StringWithAggregatesFilter>;
  city_id?: InputMaybe<IntWithAggregatesFilter>;
  country_id?: InputMaybe<IntWithAggregatesFilter>;
  last_update?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CitySumAggregate = {
  __typename?: 'CitySumAggregate';
  city_id?: Maybe<Scalars['Int']['output']>;
  country_id?: Maybe<Scalars['Int']['output']>;
};

export type CitySumOrderByAggregateInput = {
  city_id?: InputMaybe<SortOrder>;
  country_id?: InputMaybe<SortOrder>;
};

export type CityUpdateInput = {
  address?: InputMaybe<AddressUpdateManyWithoutCityNestedInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<CountryUpdateOneRequiredWithoutCityNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpdateManyMutationInput = {
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpdateManyWithWhereWithoutCountryInput = {
  data: CityUpdateManyMutationInput;
  where: CityScalarWhereInput;
};

export type CityUpdateManyWithoutCountryNestedInput = {
  connect?: InputMaybe<Array<CityWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CityCreateOrConnectWithoutCountryInput>>;
  create?: InputMaybe<Array<CityCreateWithoutCountryInput>>;
  createMany?: InputMaybe<CityCreateManyCountryInputEnvelope>;
  delete?: InputMaybe<Array<CityWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CityScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CityWhereUniqueInput>>;
  set?: InputMaybe<Array<CityWhereUniqueInput>>;
  update?: InputMaybe<Array<CityUpdateWithWhereUniqueWithoutCountryInput>>;
  updateMany?: InputMaybe<Array<CityUpdateManyWithWhereWithoutCountryInput>>;
  upsert?: InputMaybe<Array<CityUpsertWithWhereUniqueWithoutCountryInput>>;
};

export type CityUpdateOneRequiredWithoutAddressNestedInput = {
  connect?: InputMaybe<CityWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CityCreateOrConnectWithoutAddressInput>;
  create?: InputMaybe<CityCreateWithoutAddressInput>;
  update?: InputMaybe<CityUpdateToOneWithWhereWithoutAddressInput>;
  upsert?: InputMaybe<CityUpsertWithoutAddressInput>;
};

export type CityUpdateToOneWithWhereWithoutAddressInput = {
  data: CityUpdateWithoutAddressInput;
  where?: InputMaybe<CityWhereInput>;
};

export type CityUpdateWithWhereUniqueWithoutCountryInput = {
  data: CityUpdateWithoutCountryInput;
  where: CityWhereUniqueInput;
};

export type CityUpdateWithoutAddressInput = {
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  country?: InputMaybe<CountryUpdateOneRequiredWithoutCityNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpdateWithoutCountryInput = {
  address?: InputMaybe<AddressUpdateManyWithoutCityNestedInput>;
  city?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CityUpsertWithWhereUniqueWithoutCountryInput = {
  create: CityCreateWithoutCountryInput;
  update: CityUpdateWithoutCountryInput;
  where: CityWhereUniqueInput;
};

export type CityUpsertWithoutAddressInput = {
  create: CityCreateWithoutAddressInput;
  update: CityUpdateWithoutAddressInput;
  where?: InputMaybe<CityWhereInput>;
};

export type CityWhereInput = {
  AND?: InputMaybe<Array<CityWhereInput>>;
  NOT?: InputMaybe<Array<CityWhereInput>>;
  OR?: InputMaybe<Array<CityWhereInput>>;
  address?: InputMaybe<AddressListRelationFilter>;
  city?: InputMaybe<StringFilter>;
  city_id?: InputMaybe<IntFilter>;
  country?: InputMaybe<CountryRelationFilter>;
  country_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
};

export type CityWhereUniqueInput = {
  AND?: InputMaybe<Array<CityWhereInput>>;
  NOT?: InputMaybe<Array<CityWhereInput>>;
  OR?: InputMaybe<Array<CityWhereInput>>;
  address?: InputMaybe<AddressListRelationFilter>;
  city?: InputMaybe<StringFilter>;
  city_id?: InputMaybe<Scalars['Int']['input']>;
  country?: InputMaybe<CountryRelationFilter>;
  country_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
};

export type Country = {
  __typename?: 'Country';
  _count?: Maybe<CountryCount>;
  city: Array<City>;
  country: Scalars['String']['output'];
  country_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
};


export type CountryCityArgs = {
  cursor?: InputMaybe<CityWhereUniqueInput>;
  distinct?: InputMaybe<Array<CityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CityWhereInput>;
};

export type CountryAvgAggregate = {
  __typename?: 'CountryAvgAggregate';
  country_id?: Maybe<Scalars['Float']['output']>;
};

export type CountryAvgOrderByAggregateInput = {
  country_id?: InputMaybe<SortOrder>;
};

export type CountryCount = {
  __typename?: 'CountryCount';
  city: Scalars['Int']['output'];
};


export type CountryCountCityArgs = {
  where?: InputMaybe<CityWhereInput>;
};

export type CountryCountAggregate = {
  __typename?: 'CountryCountAggregate';
  _all: Scalars['Int']['output'];
  country: Scalars['Int']['output'];
  country_id: Scalars['Int']['output'];
  last_update: Scalars['Int']['output'];
};

export type CountryCountOrderByAggregateInput = {
  country?: InputMaybe<SortOrder>;
  country_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type CountryCreateInput = {
  city?: InputMaybe<CityCreateNestedManyWithoutCountryInput>;
  country: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CountryCreateManyInput = {
  country: Scalars['String']['input'];
  country_id?: InputMaybe<Scalars['Int']['input']>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CountryCreateNestedOneWithoutCityInput = {
  connect?: InputMaybe<CountryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CountryCreateOrConnectWithoutCityInput>;
  create?: InputMaybe<CountryCreateWithoutCityInput>;
};

export type CountryCreateOrConnectWithoutCityInput = {
  create: CountryCreateWithoutCityInput;
  where: CountryWhereUniqueInput;
};

export type CountryCreateWithoutCityInput = {
  country: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CountryGroupBy = {
  __typename?: 'CountryGroupBy';
  _avg?: Maybe<CountryAvgAggregate>;
  _count?: Maybe<CountryCountAggregate>;
  _max?: Maybe<CountryMaxAggregate>;
  _min?: Maybe<CountryMinAggregate>;
  _sum?: Maybe<CountrySumAggregate>;
  country: Scalars['String']['output'];
  country_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
};

export type CountryMaxAggregate = {
  __typename?: 'CountryMaxAggregate';
  country?: Maybe<Scalars['String']['output']>;
  country_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type CountryMaxOrderByAggregateInput = {
  country?: InputMaybe<SortOrder>;
  country_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type CountryMinAggregate = {
  __typename?: 'CountryMinAggregate';
  country?: Maybe<Scalars['String']['output']>;
  country_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type CountryMinOrderByAggregateInput = {
  country?: InputMaybe<SortOrder>;
  country_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type CountryOrderByWithAggregationInput = {
  _avg?: InputMaybe<CountryAvgOrderByAggregateInput>;
  _count?: InputMaybe<CountryCountOrderByAggregateInput>;
  _max?: InputMaybe<CountryMaxOrderByAggregateInput>;
  _min?: InputMaybe<CountryMinOrderByAggregateInput>;
  _sum?: InputMaybe<CountrySumOrderByAggregateInput>;
  country?: InputMaybe<SortOrder>;
  country_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type CountryOrderByWithRelationInput = {
  city?: InputMaybe<CityOrderByRelationAggregateInput>;
  country?: InputMaybe<SortOrder>;
  country_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type CountryRelationFilter = {
  is?: InputMaybe<CountryWhereInput>;
  isNot?: InputMaybe<CountryWhereInput>;
};

export enum CountryScalarFieldEnum {
  Country = 'country',
  CountryId = 'country_id',
  LastUpdate = 'last_update'
}

export type CountryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CountryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CountryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CountryScalarWhereWithAggregatesInput>>;
  country?: InputMaybe<StringWithAggregatesFilter>;
  country_id?: InputMaybe<IntWithAggregatesFilter>;
  last_update?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type CountrySumAggregate = {
  __typename?: 'CountrySumAggregate';
  country_id?: Maybe<Scalars['Int']['output']>;
};

export type CountrySumOrderByAggregateInput = {
  country_id?: InputMaybe<SortOrder>;
};

export type CountryUpdateInput = {
  city?: InputMaybe<CityUpdateManyWithoutCountryNestedInput>;
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CountryUpdateManyMutationInput = {
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CountryUpdateOneRequiredWithoutCityNestedInput = {
  connect?: InputMaybe<CountryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CountryCreateOrConnectWithoutCityInput>;
  create?: InputMaybe<CountryCreateWithoutCityInput>;
  update?: InputMaybe<CountryUpdateToOneWithWhereWithoutCityInput>;
  upsert?: InputMaybe<CountryUpsertWithoutCityInput>;
};

export type CountryUpdateToOneWithWhereWithoutCityInput = {
  data: CountryUpdateWithoutCityInput;
  where?: InputMaybe<CountryWhereInput>;
};

export type CountryUpdateWithoutCityInput = {
  country?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CountryUpsertWithoutCityInput = {
  create: CountryCreateWithoutCityInput;
  update: CountryUpdateWithoutCityInput;
  where?: InputMaybe<CountryWhereInput>;
};

export type CountryWhereInput = {
  AND?: InputMaybe<Array<CountryWhereInput>>;
  NOT?: InputMaybe<Array<CountryWhereInput>>;
  OR?: InputMaybe<Array<CountryWhereInput>>;
  city?: InputMaybe<CityListRelationFilter>;
  country?: InputMaybe<StringFilter>;
  country_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
};

export type CountryWhereUniqueInput = {
  AND?: InputMaybe<Array<CountryWhereInput>>;
  NOT?: InputMaybe<Array<CountryWhereInput>>;
  OR?: InputMaybe<Array<CountryWhereInput>>;
  city?: InputMaybe<CityListRelationFilter>;
  country?: InputMaybe<StringFilter>;
  country_id?: InputMaybe<Scalars['Int']['input']>;
  last_update?: InputMaybe<DateTimeFilter>;
};

export type Customer = {
  __typename?: 'Customer';
  _count?: Maybe<CustomerCount>;
  active: Scalars['Boolean']['output'];
  address: Address;
  address_id: Scalars['Int']['output'];
  create_date: Scalars['DateTimeISO']['output'];
  customer_id: Scalars['Int']['output'];
  email?: Maybe<Scalars['String']['output']>;
  first_name: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  payment: Array<Payment>;
  rental: Array<Rental>;
  store: Store;
  store_id: Scalars['Int']['output'];
};


export type CustomerPaymentArgs = {
  cursor?: InputMaybe<PaymentWhereUniqueInput>;
  distinct?: InputMaybe<Array<PaymentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PaymentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaymentWhereInput>;
};


export type CustomerRentalArgs = {
  cursor?: InputMaybe<RentalWhereUniqueInput>;
  distinct?: InputMaybe<Array<RentalScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RentalOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RentalWhereInput>;
};

export type CustomerAvgAggregate = {
  __typename?: 'CustomerAvgAggregate';
  address_id?: Maybe<Scalars['Float']['output']>;
  customer_id?: Maybe<Scalars['Float']['output']>;
  store_id?: Maybe<Scalars['Float']['output']>;
};

export type CustomerAvgOrderByAggregateInput = {
  address_id?: InputMaybe<SortOrder>;
  customer_id?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type CustomerCount = {
  __typename?: 'CustomerCount';
  payment: Scalars['Int']['output'];
  rental: Scalars['Int']['output'];
};


export type CustomerCountPaymentArgs = {
  where?: InputMaybe<PaymentWhereInput>;
};


export type CustomerCountRentalArgs = {
  where?: InputMaybe<RentalWhereInput>;
};

export type CustomerCountAggregate = {
  __typename?: 'CustomerCountAggregate';
  _all: Scalars['Int']['output'];
  active: Scalars['Int']['output'];
  address_id: Scalars['Int']['output'];
  create_date: Scalars['Int']['output'];
  customer_id: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  first_name: Scalars['Int']['output'];
  last_name: Scalars['Int']['output'];
  last_update: Scalars['Int']['output'];
  store_id: Scalars['Int']['output'];
};

export type CustomerCountOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  address_id?: InputMaybe<SortOrder>;
  create_date?: InputMaybe<SortOrder>;
  customer_id?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type CustomerCreateInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address: AddressCreateNestedOneWithoutCustomerInput;
  create_date: Scalars['DateTimeISO']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  payment?: InputMaybe<PaymentCreateNestedManyWithoutCustomerInput>;
  rental?: InputMaybe<RentalCreateNestedManyWithoutCustomerInput>;
  store: StoreCreateNestedOneWithoutCustomerInput;
};

export type CustomerCreateManyAddressInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  create_date: Scalars['DateTimeISO']['input'];
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  store_id: Scalars['Int']['input'];
};

export type CustomerCreateManyAddressInputEnvelope = {
  data: Array<CustomerCreateManyAddressInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomerCreateManyInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address_id: Scalars['Int']['input'];
  create_date: Scalars['DateTimeISO']['input'];
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  store_id: Scalars['Int']['input'];
};

export type CustomerCreateManyStoreInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address_id: Scalars['Int']['input'];
  create_date: Scalars['DateTimeISO']['input'];
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CustomerCreateManyStoreInputEnvelope = {
  data: Array<CustomerCreateManyStoreInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CustomerCreateNestedManyWithoutStoreInput = {
  connect?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CustomerCreateOrConnectWithoutStoreInput>>;
  create?: InputMaybe<Array<CustomerCreateWithoutStoreInput>>;
  createMany?: InputMaybe<CustomerCreateManyStoreInputEnvelope>;
};

export type CustomerCreateNestedOneWithoutPaymentInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutPaymentInput>;
  create?: InputMaybe<CustomerCreateWithoutPaymentInput>;
};

export type CustomerCreateNestedOneWithoutRentalInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutRentalInput>;
  create?: InputMaybe<CustomerCreateWithoutRentalInput>;
};

export type CustomerCreateOrConnectWithoutAddressInput = {
  create: CustomerCreateWithoutAddressInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerCreateOrConnectWithoutPaymentInput = {
  create: CustomerCreateWithoutPaymentInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerCreateOrConnectWithoutRentalInput = {
  create: CustomerCreateWithoutRentalInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerCreateOrConnectWithoutStoreInput = {
  create: CustomerCreateWithoutStoreInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerCreateWithoutAddressInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  create_date: Scalars['DateTimeISO']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  payment?: InputMaybe<PaymentCreateNestedManyWithoutCustomerInput>;
  rental?: InputMaybe<RentalCreateNestedManyWithoutCustomerInput>;
  store: StoreCreateNestedOneWithoutCustomerInput;
};

export type CustomerCreateWithoutPaymentInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address: AddressCreateNestedOneWithoutCustomerInput;
  create_date: Scalars['DateTimeISO']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  rental?: InputMaybe<RentalCreateNestedManyWithoutCustomerInput>;
  store: StoreCreateNestedOneWithoutCustomerInput;
};

export type CustomerCreateWithoutRentalInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address: AddressCreateNestedOneWithoutCustomerInput;
  create_date: Scalars['DateTimeISO']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  payment?: InputMaybe<PaymentCreateNestedManyWithoutCustomerInput>;
  store: StoreCreateNestedOneWithoutCustomerInput;
};

export type CustomerCreateWithoutStoreInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address: AddressCreateNestedOneWithoutCustomerInput;
  create_date: Scalars['DateTimeISO']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  payment?: InputMaybe<PaymentCreateNestedManyWithoutCustomerInput>;
  rental?: InputMaybe<RentalCreateNestedManyWithoutCustomerInput>;
};

export type CustomerGroupBy = {
  __typename?: 'CustomerGroupBy';
  _avg?: Maybe<CustomerAvgAggregate>;
  _count?: Maybe<CustomerCountAggregate>;
  _max?: Maybe<CustomerMaxAggregate>;
  _min?: Maybe<CustomerMinAggregate>;
  _sum?: Maybe<CustomerSumAggregate>;
  active: Scalars['Boolean']['output'];
  address_id: Scalars['Int']['output'];
  create_date: Scalars['DateTimeISO']['output'];
  customer_id: Scalars['Int']['output'];
  email?: Maybe<Scalars['String']['output']>;
  first_name: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  store_id: Scalars['Int']['output'];
};

export type CustomerListRelationFilter = {
  every?: InputMaybe<CustomerWhereInput>;
  none?: InputMaybe<CustomerWhereInput>;
  some?: InputMaybe<CustomerWhereInput>;
};

export type CustomerMaxAggregate = {
  __typename?: 'CustomerMaxAggregate';
  active?: Maybe<Scalars['Boolean']['output']>;
  address_id?: Maybe<Scalars['Int']['output']>;
  create_date?: Maybe<Scalars['DateTimeISO']['output']>;
  customer_id?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  store_id?: Maybe<Scalars['Int']['output']>;
};

export type CustomerMaxOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  address_id?: InputMaybe<SortOrder>;
  create_date?: InputMaybe<SortOrder>;
  customer_id?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type CustomerMinAggregate = {
  __typename?: 'CustomerMinAggregate';
  active?: Maybe<Scalars['Boolean']['output']>;
  address_id?: Maybe<Scalars['Int']['output']>;
  create_date?: Maybe<Scalars['DateTimeISO']['output']>;
  customer_id?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  store_id?: Maybe<Scalars['Int']['output']>;
};

export type CustomerMinOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  address_id?: InputMaybe<SortOrder>;
  create_date?: InputMaybe<SortOrder>;
  customer_id?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type CustomerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CustomerOrderByWithAggregationInput = {
  _avg?: InputMaybe<CustomerAvgOrderByAggregateInput>;
  _count?: InputMaybe<CustomerCountOrderByAggregateInput>;
  _max?: InputMaybe<CustomerMaxOrderByAggregateInput>;
  _min?: InputMaybe<CustomerMinOrderByAggregateInput>;
  _sum?: InputMaybe<CustomerSumOrderByAggregateInput>;
  active?: InputMaybe<SortOrder>;
  address_id?: InputMaybe<SortOrder>;
  create_date?: InputMaybe<SortOrder>;
  customer_id?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrderInput>;
  first_name?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrderInput>;
  store_id?: InputMaybe<SortOrder>;
};

export type CustomerOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  address?: InputMaybe<AddressOrderByWithRelationInput>;
  address_id?: InputMaybe<SortOrder>;
  create_date?: InputMaybe<SortOrder>;
  customer_id?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrderInput>;
  first_name?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrderInput>;
  payment?: InputMaybe<PaymentOrderByRelationAggregateInput>;
  rental?: InputMaybe<RentalOrderByRelationAggregateInput>;
  store?: InputMaybe<StoreOrderByWithRelationInput>;
  store_id?: InputMaybe<SortOrder>;
};

export type CustomerRelationFilter = {
  is?: InputMaybe<CustomerWhereInput>;
  isNot?: InputMaybe<CustomerWhereInput>;
};

export enum CustomerScalarFieldEnum {
  Active = 'active',
  AddressId = 'address_id',
  CreateDate = 'create_date',
  CustomerId = 'customer_id',
  Email = 'email',
  FirstName = 'first_name',
  LastName = 'last_name',
  LastUpdate = 'last_update',
  StoreId = 'store_id'
}

export type CustomerScalarWhereInput = {
  AND?: InputMaybe<Array<CustomerScalarWhereInput>>;
  NOT?: InputMaybe<Array<CustomerScalarWhereInput>>;
  OR?: InputMaybe<Array<CustomerScalarWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  address_id?: InputMaybe<IntFilter>;
  create_date?: InputMaybe<DateTimeFilter>;
  customer_id?: InputMaybe<IntFilter>;
  email?: InputMaybe<StringNullableFilter>;
  first_name?: InputMaybe<StringFilter>;
  last_name?: InputMaybe<StringFilter>;
  last_update?: InputMaybe<DateTimeNullableFilter>;
  store_id?: InputMaybe<IntFilter>;
};

export type CustomerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  active?: InputMaybe<BoolWithAggregatesFilter>;
  address_id?: InputMaybe<IntWithAggregatesFilter>;
  create_date?: InputMaybe<DateTimeWithAggregatesFilter>;
  customer_id?: InputMaybe<IntWithAggregatesFilter>;
  email?: InputMaybe<StringNullableWithAggregatesFilter>;
  first_name?: InputMaybe<StringWithAggregatesFilter>;
  last_name?: InputMaybe<StringWithAggregatesFilter>;
  last_update?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  store_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type CustomerSumAggregate = {
  __typename?: 'CustomerSumAggregate';
  address_id?: Maybe<Scalars['Int']['output']>;
  customer_id?: Maybe<Scalars['Int']['output']>;
  store_id?: Maybe<Scalars['Int']['output']>;
};

export type CustomerSumOrderByAggregateInput = {
  address_id?: InputMaybe<SortOrder>;
  customer_id?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type CustomerUpdateInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<AddressUpdateOneRequiredWithoutCustomerNestedInput>;
  create_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  payment?: InputMaybe<PaymentUpdateManyWithoutCustomerNestedInput>;
  rental?: InputMaybe<RentalUpdateManyWithoutCustomerNestedInput>;
  store?: InputMaybe<StoreUpdateOneRequiredWithoutCustomerNestedInput>;
};

export type CustomerUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  create_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type CustomerUpdateManyWithWhereWithoutAddressInput = {
  data: CustomerUpdateManyMutationInput;
  where: CustomerScalarWhereInput;
};

export type CustomerUpdateManyWithWhereWithoutStoreInput = {
  data: CustomerUpdateManyMutationInput;
  where: CustomerScalarWhereInput;
};

export type CustomerUpdateManyWithoutAddressNestedInput = {
  connect?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CustomerCreateOrConnectWithoutAddressInput>>;
  create?: InputMaybe<Array<CustomerCreateWithoutAddressInput>>;
  createMany?: InputMaybe<CustomerCreateManyAddressInputEnvelope>;
  delete?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CustomerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  set?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  update?: InputMaybe<Array<CustomerUpdateWithWhereUniqueWithoutAddressInput>>;
  updateMany?: InputMaybe<Array<CustomerUpdateManyWithWhereWithoutAddressInput>>;
  upsert?: InputMaybe<Array<CustomerUpsertWithWhereUniqueWithoutAddressInput>>;
};

export type CustomerUpdateManyWithoutStoreNestedInput = {
  connect?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CustomerCreateOrConnectWithoutStoreInput>>;
  create?: InputMaybe<Array<CustomerCreateWithoutStoreInput>>;
  createMany?: InputMaybe<CustomerCreateManyStoreInputEnvelope>;
  delete?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CustomerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  set?: InputMaybe<Array<CustomerWhereUniqueInput>>;
  update?: InputMaybe<Array<CustomerUpdateWithWhereUniqueWithoutStoreInput>>;
  updateMany?: InputMaybe<Array<CustomerUpdateManyWithWhereWithoutStoreInput>>;
  upsert?: InputMaybe<Array<CustomerUpsertWithWhereUniqueWithoutStoreInput>>;
};

export type CustomerUpdateOneRequiredWithoutPaymentNestedInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutPaymentInput>;
  create?: InputMaybe<CustomerCreateWithoutPaymentInput>;
  update?: InputMaybe<CustomerUpdateToOneWithWhereWithoutPaymentInput>;
  upsert?: InputMaybe<CustomerUpsertWithoutPaymentInput>;
};

export type CustomerUpdateOneRequiredWithoutRentalNestedInput = {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutRentalInput>;
  create?: InputMaybe<CustomerCreateWithoutRentalInput>;
  update?: InputMaybe<CustomerUpdateToOneWithWhereWithoutRentalInput>;
  upsert?: InputMaybe<CustomerUpsertWithoutRentalInput>;
};

export type CustomerUpdateToOneWithWhereWithoutPaymentInput = {
  data: CustomerUpdateWithoutPaymentInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpdateToOneWithWhereWithoutRentalInput = {
  data: CustomerUpdateWithoutRentalInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpdateWithWhereUniqueWithoutAddressInput = {
  data: CustomerUpdateWithoutAddressInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerUpdateWithWhereUniqueWithoutStoreInput = {
  data: CustomerUpdateWithoutStoreInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerUpdateWithoutAddressInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  create_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  payment?: InputMaybe<PaymentUpdateManyWithoutCustomerNestedInput>;
  rental?: InputMaybe<RentalUpdateManyWithoutCustomerNestedInput>;
  store?: InputMaybe<StoreUpdateOneRequiredWithoutCustomerNestedInput>;
};

export type CustomerUpdateWithoutPaymentInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<AddressUpdateOneRequiredWithoutCustomerNestedInput>;
  create_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  rental?: InputMaybe<RentalUpdateManyWithoutCustomerNestedInput>;
  store?: InputMaybe<StoreUpdateOneRequiredWithoutCustomerNestedInput>;
};

export type CustomerUpdateWithoutRentalInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<AddressUpdateOneRequiredWithoutCustomerNestedInput>;
  create_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  payment?: InputMaybe<PaymentUpdateManyWithoutCustomerNestedInput>;
  store?: InputMaybe<StoreUpdateOneRequiredWithoutCustomerNestedInput>;
};

export type CustomerUpdateWithoutStoreInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<AddressUpdateOneRequiredWithoutCustomerNestedInput>;
  create_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  payment?: InputMaybe<PaymentUpdateManyWithoutCustomerNestedInput>;
  rental?: InputMaybe<RentalUpdateManyWithoutCustomerNestedInput>;
};

export type CustomerUpsertWithWhereUniqueWithoutAddressInput = {
  create: CustomerCreateWithoutAddressInput;
  update: CustomerUpdateWithoutAddressInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerUpsertWithWhereUniqueWithoutStoreInput = {
  create: CustomerCreateWithoutStoreInput;
  update: CustomerUpdateWithoutStoreInput;
  where: CustomerWhereUniqueInput;
};

export type CustomerUpsertWithoutPaymentInput = {
  create: CustomerCreateWithoutPaymentInput;
  update: CustomerUpdateWithoutPaymentInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerUpsertWithoutRentalInput = {
  create: CustomerCreateWithoutRentalInput;
  update: CustomerUpdateWithoutRentalInput;
  where?: InputMaybe<CustomerWhereInput>;
};

export type CustomerWhereInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  address?: InputMaybe<AddressRelationFilter>;
  address_id?: InputMaybe<IntFilter>;
  create_date?: InputMaybe<DateTimeFilter>;
  customer_id?: InputMaybe<IntFilter>;
  email?: InputMaybe<StringNullableFilter>;
  first_name?: InputMaybe<StringFilter>;
  last_name?: InputMaybe<StringFilter>;
  last_update?: InputMaybe<DateTimeNullableFilter>;
  payment?: InputMaybe<PaymentListRelationFilter>;
  rental?: InputMaybe<RentalListRelationFilter>;
  store?: InputMaybe<StoreRelationFilter>;
  store_id?: InputMaybe<IntFilter>;
};

export type CustomerWhereUniqueInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  address?: InputMaybe<AddressRelationFilter>;
  address_id?: InputMaybe<IntFilter>;
  create_date?: InputMaybe<DateTimeFilter>;
  customer_id?: InputMaybe<Scalars['Int']['input']>;
  email?: InputMaybe<StringNullableFilter>;
  first_name?: InputMaybe<StringFilter>;
  last_name?: InputMaybe<StringFilter>;
  last_update?: InputMaybe<DateTimeNullableFilter>;
  payment?: InputMaybe<PaymentListRelationFilter>;
  rental?: InputMaybe<RentalListRelationFilter>;
  store?: InputMaybe<StoreRelationFilter>;
  store_id?: InputMaybe<IntFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DecimalFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Decimal']['input']>;
  divide?: InputMaybe<Scalars['Decimal']['input']>;
  increment?: InputMaybe<Scalars['Decimal']['input']>;
  multiply?: InputMaybe<Scalars['Decimal']['input']>;
  set?: InputMaybe<Scalars['Decimal']['input']>;
};

export type DecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type DecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type Enumfilm_RatingNullableFilter = {
  equals?: InputMaybe<Film_Rating>;
  in?: InputMaybe<Array<Film_Rating>>;
  not?: InputMaybe<NestedEnumfilm_RatingNullableFilter>;
  notIn?: InputMaybe<Array<Film_Rating>>;
};

export type Enumfilm_RatingNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumfilm_RatingNullableFilter>;
  _min?: InputMaybe<NestedEnumfilm_RatingNullableFilter>;
  equals?: InputMaybe<Film_Rating>;
  in?: InputMaybe<Array<Film_Rating>>;
  not?: InputMaybe<NestedEnumfilm_RatingNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Film_Rating>>;
};

export type Film = {
  __typename?: 'Film';
  _count?: Maybe<FilmCount>;
  description?: Maybe<Scalars['String']['output']>;
  film_actor: Array<Film_Actor>;
  film_category: Array<Film_Category>;
  film_id: Scalars['Int']['output'];
  inventory: Array<Inventory>;
  language_film_language_idTolanguage: Language;
  language_film_original_language_idTolanguage?: Maybe<Language>;
  language_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
  length?: Maybe<Scalars['Int']['output']>;
  original_language_id?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Film_Rating>;
  release_year?: Maybe<Scalars['Int']['output']>;
  rental_duration: Scalars['Int']['output'];
  rental_rate: Scalars['Decimal']['output'];
  replacement_cost: Scalars['Decimal']['output'];
  special_features?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


export type FilmFilm_ActorArgs = {
  cursor?: InputMaybe<Film_ActorWhereUniqueInput>;
  distinct?: InputMaybe<Array<Film_ActorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Film_ActorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_ActorWhereInput>;
};


export type FilmFilm_CategoryArgs = {
  cursor?: InputMaybe<Film_CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<Film_CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Film_CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_CategoryWhereInput>;
};


export type FilmInventoryArgs = {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InventoryWhereInput>;
};


export type FilmLanguage_Film_Original_Language_IdTolanguageArgs = {
  where?: InputMaybe<LanguageWhereInput>;
};

export type FilmAvgAggregate = {
  __typename?: 'FilmAvgAggregate';
  film_id?: Maybe<Scalars['Float']['output']>;
  language_id?: Maybe<Scalars['Float']['output']>;
  length?: Maybe<Scalars['Float']['output']>;
  original_language_id?: Maybe<Scalars['Float']['output']>;
  release_year?: Maybe<Scalars['Float']['output']>;
  rental_duration?: Maybe<Scalars['Float']['output']>;
  rental_rate?: Maybe<Scalars['Decimal']['output']>;
  replacement_cost?: Maybe<Scalars['Decimal']['output']>;
};

export type FilmAvgOrderByAggregateInput = {
  film_id?: InputMaybe<SortOrder>;
  language_id?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrder>;
  original_language_id?: InputMaybe<SortOrder>;
  release_year?: InputMaybe<SortOrder>;
  rental_duration?: InputMaybe<SortOrder>;
  rental_rate?: InputMaybe<SortOrder>;
  replacement_cost?: InputMaybe<SortOrder>;
};

export type FilmCount = {
  __typename?: 'FilmCount';
  film_actor: Scalars['Int']['output'];
  film_category: Scalars['Int']['output'];
  inventory: Scalars['Int']['output'];
};


export type FilmCountFilm_ActorArgs = {
  where?: InputMaybe<Film_ActorWhereInput>;
};


export type FilmCountFilm_CategoryArgs = {
  where?: InputMaybe<Film_CategoryWhereInput>;
};


export type FilmCountInventoryArgs = {
  where?: InputMaybe<InventoryWhereInput>;
};

export type FilmCountAggregate = {
  __typename?: 'FilmCountAggregate';
  _all: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  film_id: Scalars['Int']['output'];
  language_id: Scalars['Int']['output'];
  last_update: Scalars['Int']['output'];
  length: Scalars['Int']['output'];
  original_language_id: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  release_year: Scalars['Int']['output'];
  rental_duration: Scalars['Int']['output'];
  rental_rate: Scalars['Int']['output'];
  replacement_cost: Scalars['Int']['output'];
  special_features: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
};

export type FilmCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
  language_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrder>;
  original_language_id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  release_year?: InputMaybe<SortOrder>;
  rental_duration?: InputMaybe<SortOrder>;
  rental_rate?: InputMaybe<SortOrder>;
  replacement_cost?: InputMaybe<SortOrder>;
  special_features?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type FilmCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  film_actor?: InputMaybe<Film_ActorCreateNestedManyWithoutFilmInput>;
  film_category?: InputMaybe<Film_CategoryCreateNestedManyWithoutFilmInput>;
  inventory?: InputMaybe<InventoryCreateNestedManyWithoutFilmInput>;
  language_film_language_idTolanguage: LanguageCreateNestedOneWithoutFilm_Film_Language_IdTolanguageInput;
  language_film_original_language_idTolanguage?: InputMaybe<LanguageCreateNestedOneWithoutFilm_Film_Original_Language_IdTolanguageInput>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  length?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Film_Rating>;
  release_year?: InputMaybe<Scalars['Int']['input']>;
  rental_duration?: InputMaybe<Scalars['Int']['input']>;
  rental_rate?: InputMaybe<Scalars['Decimal']['input']>;
  replacement_cost?: InputMaybe<Scalars['Decimal']['input']>;
  special_features?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type FilmCreateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  film_id?: InputMaybe<Scalars['Int']['input']>;
  language_id: Scalars['Int']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  length?: InputMaybe<Scalars['Int']['input']>;
  original_language_id?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Film_Rating>;
  release_year?: InputMaybe<Scalars['Int']['input']>;
  rental_duration?: InputMaybe<Scalars['Int']['input']>;
  rental_rate?: InputMaybe<Scalars['Decimal']['input']>;
  replacement_cost?: InputMaybe<Scalars['Decimal']['input']>;
  special_features?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type FilmCreateManyLanguage_Film_Language_IdTolanguageInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  film_id?: InputMaybe<Scalars['Int']['input']>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  length?: InputMaybe<Scalars['Int']['input']>;
  original_language_id?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Film_Rating>;
  release_year?: InputMaybe<Scalars['Int']['input']>;
  rental_duration?: InputMaybe<Scalars['Int']['input']>;
  rental_rate?: InputMaybe<Scalars['Decimal']['input']>;
  replacement_cost?: InputMaybe<Scalars['Decimal']['input']>;
  special_features?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type FilmCreateManyLanguage_Film_Language_IdTolanguageInputEnvelope = {
  data: Array<FilmCreateManyLanguage_Film_Language_IdTolanguageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilmCreateManyLanguage_Film_Original_Language_IdTolanguageInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  film_id?: InputMaybe<Scalars['Int']['input']>;
  language_id: Scalars['Int']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  length?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Film_Rating>;
  release_year?: InputMaybe<Scalars['Int']['input']>;
  rental_duration?: InputMaybe<Scalars['Int']['input']>;
  rental_rate?: InputMaybe<Scalars['Decimal']['input']>;
  replacement_cost?: InputMaybe<Scalars['Decimal']['input']>;
  special_features?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type FilmCreateManyLanguage_Film_Original_Language_IdTolanguageInputEnvelope = {
  data: Array<FilmCreateManyLanguage_Film_Original_Language_IdTolanguageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilmCreateNestedManyWithoutLanguage_Film_Language_IdTolanguageInput = {
  connect?: InputMaybe<Array<FilmWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FilmCreateOrConnectWithoutLanguage_Film_Language_IdTolanguageInput>>;
  create?: InputMaybe<Array<FilmCreateWithoutLanguage_Film_Language_IdTolanguageInput>>;
  createMany?: InputMaybe<FilmCreateManyLanguage_Film_Language_IdTolanguageInputEnvelope>;
};

export type FilmCreateNestedManyWithoutLanguage_Film_Original_Language_IdTolanguageInput = {
  connect?: InputMaybe<Array<FilmWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FilmCreateOrConnectWithoutLanguage_Film_Original_Language_IdTolanguageInput>>;
  create?: InputMaybe<Array<FilmCreateWithoutLanguage_Film_Original_Language_IdTolanguageInput>>;
  createMany?: InputMaybe<FilmCreateManyLanguage_Film_Original_Language_IdTolanguageInputEnvelope>;
};

export type FilmCreateNestedOneWithoutFilm_ActorInput = {
  connect?: InputMaybe<FilmWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FilmCreateOrConnectWithoutFilm_ActorInput>;
  create?: InputMaybe<FilmCreateWithoutFilm_ActorInput>;
};

export type FilmCreateNestedOneWithoutFilm_CategoryInput = {
  connect?: InputMaybe<FilmWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FilmCreateOrConnectWithoutFilm_CategoryInput>;
  create?: InputMaybe<FilmCreateWithoutFilm_CategoryInput>;
};

export type FilmCreateNestedOneWithoutInventoryInput = {
  connect?: InputMaybe<FilmWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FilmCreateOrConnectWithoutInventoryInput>;
  create?: InputMaybe<FilmCreateWithoutInventoryInput>;
};

export type FilmCreateOrConnectWithoutFilm_ActorInput = {
  create: FilmCreateWithoutFilm_ActorInput;
  where: FilmWhereUniqueInput;
};

export type FilmCreateOrConnectWithoutFilm_CategoryInput = {
  create: FilmCreateWithoutFilm_CategoryInput;
  where: FilmWhereUniqueInput;
};

export type FilmCreateOrConnectWithoutInventoryInput = {
  create: FilmCreateWithoutInventoryInput;
  where: FilmWhereUniqueInput;
};

export type FilmCreateOrConnectWithoutLanguage_Film_Language_IdTolanguageInput = {
  create: FilmCreateWithoutLanguage_Film_Language_IdTolanguageInput;
  where: FilmWhereUniqueInput;
};

export type FilmCreateOrConnectWithoutLanguage_Film_Original_Language_IdTolanguageInput = {
  create: FilmCreateWithoutLanguage_Film_Original_Language_IdTolanguageInput;
  where: FilmWhereUniqueInput;
};

export type FilmCreateWithoutFilm_ActorInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  film_category?: InputMaybe<Film_CategoryCreateNestedManyWithoutFilmInput>;
  inventory?: InputMaybe<InventoryCreateNestedManyWithoutFilmInput>;
  language_film_language_idTolanguage: LanguageCreateNestedOneWithoutFilm_Film_Language_IdTolanguageInput;
  language_film_original_language_idTolanguage?: InputMaybe<LanguageCreateNestedOneWithoutFilm_Film_Original_Language_IdTolanguageInput>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  length?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Film_Rating>;
  release_year?: InputMaybe<Scalars['Int']['input']>;
  rental_duration?: InputMaybe<Scalars['Int']['input']>;
  rental_rate?: InputMaybe<Scalars['Decimal']['input']>;
  replacement_cost?: InputMaybe<Scalars['Decimal']['input']>;
  special_features?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type FilmCreateWithoutFilm_CategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  film_actor?: InputMaybe<Film_ActorCreateNestedManyWithoutFilmInput>;
  inventory?: InputMaybe<InventoryCreateNestedManyWithoutFilmInput>;
  language_film_language_idTolanguage: LanguageCreateNestedOneWithoutFilm_Film_Language_IdTolanguageInput;
  language_film_original_language_idTolanguage?: InputMaybe<LanguageCreateNestedOneWithoutFilm_Film_Original_Language_IdTolanguageInput>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  length?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Film_Rating>;
  release_year?: InputMaybe<Scalars['Int']['input']>;
  rental_duration?: InputMaybe<Scalars['Int']['input']>;
  rental_rate?: InputMaybe<Scalars['Decimal']['input']>;
  replacement_cost?: InputMaybe<Scalars['Decimal']['input']>;
  special_features?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type FilmCreateWithoutInventoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  film_actor?: InputMaybe<Film_ActorCreateNestedManyWithoutFilmInput>;
  film_category?: InputMaybe<Film_CategoryCreateNestedManyWithoutFilmInput>;
  language_film_language_idTolanguage: LanguageCreateNestedOneWithoutFilm_Film_Language_IdTolanguageInput;
  language_film_original_language_idTolanguage?: InputMaybe<LanguageCreateNestedOneWithoutFilm_Film_Original_Language_IdTolanguageInput>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  length?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Film_Rating>;
  release_year?: InputMaybe<Scalars['Int']['input']>;
  rental_duration?: InputMaybe<Scalars['Int']['input']>;
  rental_rate?: InputMaybe<Scalars['Decimal']['input']>;
  replacement_cost?: InputMaybe<Scalars['Decimal']['input']>;
  special_features?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type FilmCreateWithoutLanguage_Film_Language_IdTolanguageInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  film_actor?: InputMaybe<Film_ActorCreateNestedManyWithoutFilmInput>;
  film_category?: InputMaybe<Film_CategoryCreateNestedManyWithoutFilmInput>;
  inventory?: InputMaybe<InventoryCreateNestedManyWithoutFilmInput>;
  language_film_original_language_idTolanguage?: InputMaybe<LanguageCreateNestedOneWithoutFilm_Film_Original_Language_IdTolanguageInput>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  length?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Film_Rating>;
  release_year?: InputMaybe<Scalars['Int']['input']>;
  rental_duration?: InputMaybe<Scalars['Int']['input']>;
  rental_rate?: InputMaybe<Scalars['Decimal']['input']>;
  replacement_cost?: InputMaybe<Scalars['Decimal']['input']>;
  special_features?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type FilmCreateWithoutLanguage_Film_Original_Language_IdTolanguageInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  film_actor?: InputMaybe<Film_ActorCreateNestedManyWithoutFilmInput>;
  film_category?: InputMaybe<Film_CategoryCreateNestedManyWithoutFilmInput>;
  inventory?: InputMaybe<InventoryCreateNestedManyWithoutFilmInput>;
  language_film_language_idTolanguage: LanguageCreateNestedOneWithoutFilm_Film_Language_IdTolanguageInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  length?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Film_Rating>;
  release_year?: InputMaybe<Scalars['Int']['input']>;
  rental_duration?: InputMaybe<Scalars['Int']['input']>;
  rental_rate?: InputMaybe<Scalars['Decimal']['input']>;
  replacement_cost?: InputMaybe<Scalars['Decimal']['input']>;
  special_features?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type FilmGroupBy = {
  __typename?: 'FilmGroupBy';
  _avg?: Maybe<FilmAvgAggregate>;
  _count?: Maybe<FilmCountAggregate>;
  _max?: Maybe<FilmMaxAggregate>;
  _min?: Maybe<FilmMinAggregate>;
  _sum?: Maybe<FilmSumAggregate>;
  description?: Maybe<Scalars['String']['output']>;
  film_id: Scalars['Int']['output'];
  language_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
  length?: Maybe<Scalars['Int']['output']>;
  original_language_id?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Film_Rating>;
  release_year?: Maybe<Scalars['Int']['output']>;
  rental_duration: Scalars['Int']['output'];
  rental_rate: Scalars['Decimal']['output'];
  replacement_cost: Scalars['Decimal']['output'];
  special_features?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type FilmListRelationFilter = {
  every?: InputMaybe<FilmWhereInput>;
  none?: InputMaybe<FilmWhereInput>;
  some?: InputMaybe<FilmWhereInput>;
};

export type FilmMaxAggregate = {
  __typename?: 'FilmMaxAggregate';
  description?: Maybe<Scalars['String']['output']>;
  film_id?: Maybe<Scalars['Int']['output']>;
  language_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  length?: Maybe<Scalars['Int']['output']>;
  original_language_id?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Film_Rating>;
  release_year?: Maybe<Scalars['Int']['output']>;
  rental_duration?: Maybe<Scalars['Int']['output']>;
  rental_rate?: Maybe<Scalars['Decimal']['output']>;
  replacement_cost?: Maybe<Scalars['Decimal']['output']>;
  special_features?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type FilmMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
  language_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrder>;
  original_language_id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  release_year?: InputMaybe<SortOrder>;
  rental_duration?: InputMaybe<SortOrder>;
  rental_rate?: InputMaybe<SortOrder>;
  replacement_cost?: InputMaybe<SortOrder>;
  special_features?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type FilmMinAggregate = {
  __typename?: 'FilmMinAggregate';
  description?: Maybe<Scalars['String']['output']>;
  film_id?: Maybe<Scalars['Int']['output']>;
  language_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  length?: Maybe<Scalars['Int']['output']>;
  original_language_id?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Film_Rating>;
  release_year?: Maybe<Scalars['Int']['output']>;
  rental_duration?: Maybe<Scalars['Int']['output']>;
  rental_rate?: Maybe<Scalars['Decimal']['output']>;
  replacement_cost?: Maybe<Scalars['Decimal']['output']>;
  special_features?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type FilmMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
  language_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrder>;
  original_language_id?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  release_year?: InputMaybe<SortOrder>;
  rental_duration?: InputMaybe<SortOrder>;
  rental_rate?: InputMaybe<SortOrder>;
  replacement_cost?: InputMaybe<SortOrder>;
  special_features?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type FilmOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type FilmOrderByWithAggregationInput = {
  _avg?: InputMaybe<FilmAvgOrderByAggregateInput>;
  _count?: InputMaybe<FilmCountOrderByAggregateInput>;
  _max?: InputMaybe<FilmMaxOrderByAggregateInput>;
  _min?: InputMaybe<FilmMinOrderByAggregateInput>;
  _sum?: InputMaybe<FilmSumOrderByAggregateInput>;
  description?: InputMaybe<SortOrderInput>;
  film_id?: InputMaybe<SortOrder>;
  language_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrderInput>;
  original_language_id?: InputMaybe<SortOrderInput>;
  rating?: InputMaybe<SortOrderInput>;
  release_year?: InputMaybe<SortOrderInput>;
  rental_duration?: InputMaybe<SortOrder>;
  rental_rate?: InputMaybe<SortOrder>;
  replacement_cost?: InputMaybe<SortOrder>;
  special_features?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
};

export type FilmOrderByWithRelationInput = {
  description?: InputMaybe<SortOrderInput>;
  film_actor?: InputMaybe<Film_ActorOrderByRelationAggregateInput>;
  film_category?: InputMaybe<Film_CategoryOrderByRelationAggregateInput>;
  film_id?: InputMaybe<SortOrder>;
  inventory?: InputMaybe<InventoryOrderByRelationAggregateInput>;
  language_film_language_idTolanguage?: InputMaybe<LanguageOrderByWithRelationInput>;
  language_film_original_language_idTolanguage?: InputMaybe<LanguageOrderByWithRelationInput>;
  language_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrderInput>;
  original_language_id?: InputMaybe<SortOrderInput>;
  rating?: InputMaybe<SortOrderInput>;
  release_year?: InputMaybe<SortOrderInput>;
  rental_duration?: InputMaybe<SortOrder>;
  rental_rate?: InputMaybe<SortOrder>;
  replacement_cost?: InputMaybe<SortOrder>;
  special_features?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
};

export type FilmRelationFilter = {
  is?: InputMaybe<FilmWhereInput>;
  isNot?: InputMaybe<FilmWhereInput>;
};

export enum FilmScalarFieldEnum {
  Description = 'description',
  FilmId = 'film_id',
  LanguageId = 'language_id',
  LastUpdate = 'last_update',
  Length = 'length',
  OriginalLanguageId = 'original_language_id',
  Rating = 'rating',
  ReleaseYear = 'release_year',
  RentalDuration = 'rental_duration',
  RentalRate = 'rental_rate',
  ReplacementCost = 'replacement_cost',
  SpecialFeatures = 'special_features',
  Title = 'title'
}

export type FilmScalarWhereInput = {
  AND?: InputMaybe<Array<FilmScalarWhereInput>>;
  NOT?: InputMaybe<Array<FilmScalarWhereInput>>;
  OR?: InputMaybe<Array<FilmScalarWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  film_id?: InputMaybe<IntFilter>;
  language_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  length?: InputMaybe<IntNullableFilter>;
  original_language_id?: InputMaybe<IntNullableFilter>;
  rating?: InputMaybe<Enumfilm_RatingNullableFilter>;
  release_year?: InputMaybe<IntNullableFilter>;
  rental_duration?: InputMaybe<IntFilter>;
  rental_rate?: InputMaybe<DecimalFilter>;
  replacement_cost?: InputMaybe<DecimalFilter>;
  special_features?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FilmScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FilmScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FilmScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FilmScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  film_id?: InputMaybe<IntWithAggregatesFilter>;
  language_id?: InputMaybe<IntWithAggregatesFilter>;
  last_update?: InputMaybe<DateTimeWithAggregatesFilter>;
  length?: InputMaybe<IntNullableWithAggregatesFilter>;
  original_language_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  rating?: InputMaybe<Enumfilm_RatingNullableWithAggregatesFilter>;
  release_year?: InputMaybe<IntNullableWithAggregatesFilter>;
  rental_duration?: InputMaybe<IntWithAggregatesFilter>;
  rental_rate?: InputMaybe<DecimalWithAggregatesFilter>;
  replacement_cost?: InputMaybe<DecimalWithAggregatesFilter>;
  special_features?: InputMaybe<StringNullableWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type FilmSumAggregate = {
  __typename?: 'FilmSumAggregate';
  film_id?: Maybe<Scalars['Int']['output']>;
  language_id?: Maybe<Scalars['Int']['output']>;
  length?: Maybe<Scalars['Int']['output']>;
  original_language_id?: Maybe<Scalars['Int']['output']>;
  release_year?: Maybe<Scalars['Int']['output']>;
  rental_duration?: Maybe<Scalars['Int']['output']>;
  rental_rate?: Maybe<Scalars['Decimal']['output']>;
  replacement_cost?: Maybe<Scalars['Decimal']['output']>;
};

export type FilmSumOrderByAggregateInput = {
  film_id?: InputMaybe<SortOrder>;
  language_id?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrder>;
  original_language_id?: InputMaybe<SortOrder>;
  release_year?: InputMaybe<SortOrder>;
  rental_duration?: InputMaybe<SortOrder>;
  rental_rate?: InputMaybe<SortOrder>;
  replacement_cost?: InputMaybe<SortOrder>;
};

export type FilmUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  film_actor?: InputMaybe<Film_ActorUpdateManyWithoutFilmNestedInput>;
  film_category?: InputMaybe<Film_CategoryUpdateManyWithoutFilmNestedInput>;
  inventory?: InputMaybe<InventoryUpdateManyWithoutFilmNestedInput>;
  language_film_language_idTolanguage?: InputMaybe<LanguageUpdateOneRequiredWithoutFilm_Film_Language_IdTolanguageNestedInput>;
  language_film_original_language_idTolanguage?: InputMaybe<LanguageUpdateOneWithoutFilm_Film_Original_Language_IdTolanguageNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  length?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableEnumfilm_RatingFieldUpdateOperationsInput>;
  release_year?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rental_duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  rental_rate?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  replacement_cost?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  special_features?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FilmUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  length?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableEnumfilm_RatingFieldUpdateOperationsInput>;
  release_year?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rental_duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  rental_rate?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  replacement_cost?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  special_features?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FilmUpdateManyWithWhereWithoutLanguage_Film_Language_IdTolanguageInput = {
  data: FilmUpdateManyMutationInput;
  where: FilmScalarWhereInput;
};

export type FilmUpdateManyWithWhereWithoutLanguage_Film_Original_Language_IdTolanguageInput = {
  data: FilmUpdateManyMutationInput;
  where: FilmScalarWhereInput;
};

export type FilmUpdateManyWithoutLanguage_Film_Language_IdTolanguageNestedInput = {
  connect?: InputMaybe<Array<FilmWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FilmCreateOrConnectWithoutLanguage_Film_Language_IdTolanguageInput>>;
  create?: InputMaybe<Array<FilmCreateWithoutLanguage_Film_Language_IdTolanguageInput>>;
  createMany?: InputMaybe<FilmCreateManyLanguage_Film_Language_IdTolanguageInputEnvelope>;
  delete?: InputMaybe<Array<FilmWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FilmScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FilmWhereUniqueInput>>;
  set?: InputMaybe<Array<FilmWhereUniqueInput>>;
  update?: InputMaybe<Array<FilmUpdateWithWhereUniqueWithoutLanguage_Film_Language_IdTolanguageInput>>;
  updateMany?: InputMaybe<Array<FilmUpdateManyWithWhereWithoutLanguage_Film_Language_IdTolanguageInput>>;
  upsert?: InputMaybe<Array<FilmUpsertWithWhereUniqueWithoutLanguage_Film_Language_IdTolanguageInput>>;
};

export type FilmUpdateManyWithoutLanguage_Film_Original_Language_IdTolanguageNestedInput = {
  connect?: InputMaybe<Array<FilmWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<FilmCreateOrConnectWithoutLanguage_Film_Original_Language_IdTolanguageInput>>;
  create?: InputMaybe<Array<FilmCreateWithoutLanguage_Film_Original_Language_IdTolanguageInput>>;
  createMany?: InputMaybe<FilmCreateManyLanguage_Film_Original_Language_IdTolanguageInputEnvelope>;
  delete?: InputMaybe<Array<FilmWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<FilmScalarWhereInput>>;
  disconnect?: InputMaybe<Array<FilmWhereUniqueInput>>;
  set?: InputMaybe<Array<FilmWhereUniqueInput>>;
  update?: InputMaybe<Array<FilmUpdateWithWhereUniqueWithoutLanguage_Film_Original_Language_IdTolanguageInput>>;
  updateMany?: InputMaybe<Array<FilmUpdateManyWithWhereWithoutLanguage_Film_Original_Language_IdTolanguageInput>>;
  upsert?: InputMaybe<Array<FilmUpsertWithWhereUniqueWithoutLanguage_Film_Original_Language_IdTolanguageInput>>;
};

export type FilmUpdateOneRequiredWithoutFilm_ActorNestedInput = {
  connect?: InputMaybe<FilmWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FilmCreateOrConnectWithoutFilm_ActorInput>;
  create?: InputMaybe<FilmCreateWithoutFilm_ActorInput>;
  update?: InputMaybe<FilmUpdateToOneWithWhereWithoutFilm_ActorInput>;
  upsert?: InputMaybe<FilmUpsertWithoutFilm_ActorInput>;
};

export type FilmUpdateOneRequiredWithoutFilm_CategoryNestedInput = {
  connect?: InputMaybe<FilmWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FilmCreateOrConnectWithoutFilm_CategoryInput>;
  create?: InputMaybe<FilmCreateWithoutFilm_CategoryInput>;
  update?: InputMaybe<FilmUpdateToOneWithWhereWithoutFilm_CategoryInput>;
  upsert?: InputMaybe<FilmUpsertWithoutFilm_CategoryInput>;
};

export type FilmUpdateOneRequiredWithoutInventoryNestedInput = {
  connect?: InputMaybe<FilmWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FilmCreateOrConnectWithoutInventoryInput>;
  create?: InputMaybe<FilmCreateWithoutInventoryInput>;
  update?: InputMaybe<FilmUpdateToOneWithWhereWithoutInventoryInput>;
  upsert?: InputMaybe<FilmUpsertWithoutInventoryInput>;
};

export type FilmUpdateToOneWithWhereWithoutFilm_ActorInput = {
  data: FilmUpdateWithoutFilm_ActorInput;
  where?: InputMaybe<FilmWhereInput>;
};

export type FilmUpdateToOneWithWhereWithoutFilm_CategoryInput = {
  data: FilmUpdateWithoutFilm_CategoryInput;
  where?: InputMaybe<FilmWhereInput>;
};

export type FilmUpdateToOneWithWhereWithoutInventoryInput = {
  data: FilmUpdateWithoutInventoryInput;
  where?: InputMaybe<FilmWhereInput>;
};

export type FilmUpdateWithWhereUniqueWithoutLanguage_Film_Language_IdTolanguageInput = {
  data: FilmUpdateWithoutLanguage_Film_Language_IdTolanguageInput;
  where: FilmWhereUniqueInput;
};

export type FilmUpdateWithWhereUniqueWithoutLanguage_Film_Original_Language_IdTolanguageInput = {
  data: FilmUpdateWithoutLanguage_Film_Original_Language_IdTolanguageInput;
  where: FilmWhereUniqueInput;
};

export type FilmUpdateWithoutFilm_ActorInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  film_category?: InputMaybe<Film_CategoryUpdateManyWithoutFilmNestedInput>;
  inventory?: InputMaybe<InventoryUpdateManyWithoutFilmNestedInput>;
  language_film_language_idTolanguage?: InputMaybe<LanguageUpdateOneRequiredWithoutFilm_Film_Language_IdTolanguageNestedInput>;
  language_film_original_language_idTolanguage?: InputMaybe<LanguageUpdateOneWithoutFilm_Film_Original_Language_IdTolanguageNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  length?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableEnumfilm_RatingFieldUpdateOperationsInput>;
  release_year?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rental_duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  rental_rate?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  replacement_cost?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  special_features?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FilmUpdateWithoutFilm_CategoryInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  film_actor?: InputMaybe<Film_ActorUpdateManyWithoutFilmNestedInput>;
  inventory?: InputMaybe<InventoryUpdateManyWithoutFilmNestedInput>;
  language_film_language_idTolanguage?: InputMaybe<LanguageUpdateOneRequiredWithoutFilm_Film_Language_IdTolanguageNestedInput>;
  language_film_original_language_idTolanguage?: InputMaybe<LanguageUpdateOneWithoutFilm_Film_Original_Language_IdTolanguageNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  length?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableEnumfilm_RatingFieldUpdateOperationsInput>;
  release_year?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rental_duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  rental_rate?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  replacement_cost?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  special_features?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FilmUpdateWithoutInventoryInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  film_actor?: InputMaybe<Film_ActorUpdateManyWithoutFilmNestedInput>;
  film_category?: InputMaybe<Film_CategoryUpdateManyWithoutFilmNestedInput>;
  language_film_language_idTolanguage?: InputMaybe<LanguageUpdateOneRequiredWithoutFilm_Film_Language_IdTolanguageNestedInput>;
  language_film_original_language_idTolanguage?: InputMaybe<LanguageUpdateOneWithoutFilm_Film_Original_Language_IdTolanguageNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  length?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableEnumfilm_RatingFieldUpdateOperationsInput>;
  release_year?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rental_duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  rental_rate?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  replacement_cost?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  special_features?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FilmUpdateWithoutLanguage_Film_Language_IdTolanguageInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  film_actor?: InputMaybe<Film_ActorUpdateManyWithoutFilmNestedInput>;
  film_category?: InputMaybe<Film_CategoryUpdateManyWithoutFilmNestedInput>;
  inventory?: InputMaybe<InventoryUpdateManyWithoutFilmNestedInput>;
  language_film_original_language_idTolanguage?: InputMaybe<LanguageUpdateOneWithoutFilm_Film_Original_Language_IdTolanguageNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  length?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableEnumfilm_RatingFieldUpdateOperationsInput>;
  release_year?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rental_duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  rental_rate?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  replacement_cost?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  special_features?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FilmUpdateWithoutLanguage_Film_Original_Language_IdTolanguageInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  film_actor?: InputMaybe<Film_ActorUpdateManyWithoutFilmNestedInput>;
  film_category?: InputMaybe<Film_CategoryUpdateManyWithoutFilmNestedInput>;
  inventory?: InputMaybe<InventoryUpdateManyWithoutFilmNestedInput>;
  language_film_language_idTolanguage?: InputMaybe<LanguageUpdateOneRequiredWithoutFilm_Film_Language_IdTolanguageNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  length?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableEnumfilm_RatingFieldUpdateOperationsInput>;
  release_year?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  rental_duration?: InputMaybe<IntFieldUpdateOperationsInput>;
  rental_rate?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  replacement_cost?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  special_features?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type FilmUpsertWithWhereUniqueWithoutLanguage_Film_Language_IdTolanguageInput = {
  create: FilmCreateWithoutLanguage_Film_Language_IdTolanguageInput;
  update: FilmUpdateWithoutLanguage_Film_Language_IdTolanguageInput;
  where: FilmWhereUniqueInput;
};

export type FilmUpsertWithWhereUniqueWithoutLanguage_Film_Original_Language_IdTolanguageInput = {
  create: FilmCreateWithoutLanguage_Film_Original_Language_IdTolanguageInput;
  update: FilmUpdateWithoutLanguage_Film_Original_Language_IdTolanguageInput;
  where: FilmWhereUniqueInput;
};

export type FilmUpsertWithoutFilm_ActorInput = {
  create: FilmCreateWithoutFilm_ActorInput;
  update: FilmUpdateWithoutFilm_ActorInput;
  where?: InputMaybe<FilmWhereInput>;
};

export type FilmUpsertWithoutFilm_CategoryInput = {
  create: FilmCreateWithoutFilm_CategoryInput;
  update: FilmUpdateWithoutFilm_CategoryInput;
  where?: InputMaybe<FilmWhereInput>;
};

export type FilmUpsertWithoutInventoryInput = {
  create: FilmCreateWithoutInventoryInput;
  update: FilmUpdateWithoutInventoryInput;
  where?: InputMaybe<FilmWhereInput>;
};

export type FilmWhereInput = {
  AND?: InputMaybe<Array<FilmWhereInput>>;
  NOT?: InputMaybe<Array<FilmWhereInput>>;
  OR?: InputMaybe<Array<FilmWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  film_actor?: InputMaybe<Film_ActorListRelationFilter>;
  film_category?: InputMaybe<Film_CategoryListRelationFilter>;
  film_id?: InputMaybe<IntFilter>;
  inventory?: InputMaybe<InventoryListRelationFilter>;
  language_film_language_idTolanguage?: InputMaybe<LanguageRelationFilter>;
  language_film_original_language_idTolanguage?: InputMaybe<LanguageNullableRelationFilter>;
  language_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  length?: InputMaybe<IntNullableFilter>;
  original_language_id?: InputMaybe<IntNullableFilter>;
  rating?: InputMaybe<Enumfilm_RatingNullableFilter>;
  release_year?: InputMaybe<IntNullableFilter>;
  rental_duration?: InputMaybe<IntFilter>;
  rental_rate?: InputMaybe<DecimalFilter>;
  replacement_cost?: InputMaybe<DecimalFilter>;
  special_features?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FilmWhereUniqueInput = {
  AND?: InputMaybe<Array<FilmWhereInput>>;
  NOT?: InputMaybe<Array<FilmWhereInput>>;
  OR?: InputMaybe<Array<FilmWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  film_actor?: InputMaybe<Film_ActorListRelationFilter>;
  film_category?: InputMaybe<Film_CategoryListRelationFilter>;
  film_id?: InputMaybe<Scalars['Int']['input']>;
  inventory?: InputMaybe<InventoryListRelationFilter>;
  language_film_language_idTolanguage?: InputMaybe<LanguageRelationFilter>;
  language_film_original_language_idTolanguage?: InputMaybe<LanguageNullableRelationFilter>;
  language_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  length?: InputMaybe<IntNullableFilter>;
  original_language_id?: InputMaybe<IntNullableFilter>;
  rating?: InputMaybe<Enumfilm_RatingNullableFilter>;
  release_year?: InputMaybe<IntNullableFilter>;
  rental_duration?: InputMaybe<IntFilter>;
  rental_rate?: InputMaybe<DecimalFilter>;
  replacement_cost?: InputMaybe<DecimalFilter>;
  special_features?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
};

export type Film_Actor = {
  __typename?: 'Film_actor';
  actor: Actor;
  actor_id: Scalars['Int']['output'];
  film: Film;
  film_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
};

export type Film_ActorAvgAggregate = {
  __typename?: 'Film_actorAvgAggregate';
  actor_id?: Maybe<Scalars['Float']['output']>;
  film_id?: Maybe<Scalars['Float']['output']>;
};

export type Film_ActorAvgOrderByAggregateInput = {
  actor_id?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
};

export type Film_ActorCountAggregate = {
  __typename?: 'Film_actorCountAggregate';
  _all: Scalars['Int']['output'];
  actor_id: Scalars['Int']['output'];
  film_id: Scalars['Int']['output'];
  last_update: Scalars['Int']['output'];
};

export type Film_ActorCountOrderByAggregateInput = {
  actor_id?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type Film_ActorCreateInput = {
  actor: ActorCreateNestedOneWithoutFilm_ActorInput;
  film: FilmCreateNestedOneWithoutFilm_ActorInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type Film_ActorCreateManyActorInput = {
  film_id: Scalars['Int']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type Film_ActorCreateManyActorInputEnvelope = {
  data: Array<Film_ActorCreateManyActorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Film_ActorCreateManyFilmInput = {
  actor_id: Scalars['Int']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type Film_ActorCreateManyFilmInputEnvelope = {
  data: Array<Film_ActorCreateManyFilmInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Film_ActorCreateManyInput = {
  actor_id: Scalars['Int']['input'];
  film_id: Scalars['Int']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type Film_ActorCreateNestedManyWithoutActorInput = {
  connect?: InputMaybe<Array<Film_ActorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Film_ActorCreateOrConnectWithoutActorInput>>;
  create?: InputMaybe<Array<Film_ActorCreateWithoutActorInput>>;
  createMany?: InputMaybe<Film_ActorCreateManyActorInputEnvelope>;
};

export type Film_ActorCreateNestedManyWithoutFilmInput = {
  connect?: InputMaybe<Array<Film_ActorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Film_ActorCreateOrConnectWithoutFilmInput>>;
  create?: InputMaybe<Array<Film_ActorCreateWithoutFilmInput>>;
  createMany?: InputMaybe<Film_ActorCreateManyFilmInputEnvelope>;
};

export type Film_ActorCreateOrConnectWithoutActorInput = {
  create: Film_ActorCreateWithoutActorInput;
  where: Film_ActorWhereUniqueInput;
};

export type Film_ActorCreateOrConnectWithoutFilmInput = {
  create: Film_ActorCreateWithoutFilmInput;
  where: Film_ActorWhereUniqueInput;
};

export type Film_ActorCreateWithoutActorInput = {
  film: FilmCreateNestedOneWithoutFilm_ActorInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type Film_ActorCreateWithoutFilmInput = {
  actor: ActorCreateNestedOneWithoutFilm_ActorInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type Film_ActorGroupBy = {
  __typename?: 'Film_actorGroupBy';
  _avg?: Maybe<Film_ActorAvgAggregate>;
  _count?: Maybe<Film_ActorCountAggregate>;
  _max?: Maybe<Film_ActorMaxAggregate>;
  _min?: Maybe<Film_ActorMinAggregate>;
  _sum?: Maybe<Film_ActorSumAggregate>;
  actor_id: Scalars['Int']['output'];
  film_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
};

export type Film_ActorListRelationFilter = {
  every?: InputMaybe<Film_ActorWhereInput>;
  none?: InputMaybe<Film_ActorWhereInput>;
  some?: InputMaybe<Film_ActorWhereInput>;
};

export type Film_ActorMaxAggregate = {
  __typename?: 'Film_actorMaxAggregate';
  actor_id?: Maybe<Scalars['Int']['output']>;
  film_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type Film_ActorMaxOrderByAggregateInput = {
  actor_id?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type Film_ActorMinAggregate = {
  __typename?: 'Film_actorMinAggregate';
  actor_id?: Maybe<Scalars['Int']['output']>;
  film_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type Film_ActorMinOrderByAggregateInput = {
  actor_id?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type Film_ActorOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Film_ActorOrderByWithAggregationInput = {
  _avg?: InputMaybe<Film_ActorAvgOrderByAggregateInput>;
  _count?: InputMaybe<Film_ActorCountOrderByAggregateInput>;
  _max?: InputMaybe<Film_ActorMaxOrderByAggregateInput>;
  _min?: InputMaybe<Film_ActorMinOrderByAggregateInput>;
  _sum?: InputMaybe<Film_ActorSumOrderByAggregateInput>;
  actor_id?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type Film_ActorOrderByWithRelationInput = {
  actor?: InputMaybe<ActorOrderByWithRelationInput>;
  actor_id?: InputMaybe<SortOrder>;
  film?: InputMaybe<FilmOrderByWithRelationInput>;
  film_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export enum Film_ActorScalarFieldEnum {
  ActorId = 'actor_id',
  FilmId = 'film_id',
  LastUpdate = 'last_update'
}

export type Film_ActorScalarWhereInput = {
  AND?: InputMaybe<Array<Film_ActorScalarWhereInput>>;
  NOT?: InputMaybe<Array<Film_ActorScalarWhereInput>>;
  OR?: InputMaybe<Array<Film_ActorScalarWhereInput>>;
  actor_id?: InputMaybe<IntFilter>;
  film_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
};

export type Film_ActorScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<Film_ActorScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<Film_ActorScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<Film_ActorScalarWhereWithAggregatesInput>>;
  actor_id?: InputMaybe<IntWithAggregatesFilter>;
  film_id?: InputMaybe<IntWithAggregatesFilter>;
  last_update?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type Film_ActorSumAggregate = {
  __typename?: 'Film_actorSumAggregate';
  actor_id?: Maybe<Scalars['Int']['output']>;
  film_id?: Maybe<Scalars['Int']['output']>;
};

export type Film_ActorSumOrderByAggregateInput = {
  actor_id?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
};

export type Film_ActorUpdateInput = {
  actor?: InputMaybe<ActorUpdateOneRequiredWithoutFilm_ActorNestedInput>;
  film?: InputMaybe<FilmUpdateOneRequiredWithoutFilm_ActorNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Film_ActorUpdateManyMutationInput = {
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Film_ActorUpdateManyWithWhereWithoutActorInput = {
  data: Film_ActorUpdateManyMutationInput;
  where: Film_ActorScalarWhereInput;
};

export type Film_ActorUpdateManyWithWhereWithoutFilmInput = {
  data: Film_ActorUpdateManyMutationInput;
  where: Film_ActorScalarWhereInput;
};

export type Film_ActorUpdateManyWithoutActorNestedInput = {
  connect?: InputMaybe<Array<Film_ActorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Film_ActorCreateOrConnectWithoutActorInput>>;
  create?: InputMaybe<Array<Film_ActorCreateWithoutActorInput>>;
  createMany?: InputMaybe<Film_ActorCreateManyActorInputEnvelope>;
  delete?: InputMaybe<Array<Film_ActorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Film_ActorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Film_ActorWhereUniqueInput>>;
  set?: InputMaybe<Array<Film_ActorWhereUniqueInput>>;
  update?: InputMaybe<Array<Film_ActorUpdateWithWhereUniqueWithoutActorInput>>;
  updateMany?: InputMaybe<Array<Film_ActorUpdateManyWithWhereWithoutActorInput>>;
  upsert?: InputMaybe<Array<Film_ActorUpsertWithWhereUniqueWithoutActorInput>>;
};

export type Film_ActorUpdateManyWithoutFilmNestedInput = {
  connect?: InputMaybe<Array<Film_ActorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Film_ActorCreateOrConnectWithoutFilmInput>>;
  create?: InputMaybe<Array<Film_ActorCreateWithoutFilmInput>>;
  createMany?: InputMaybe<Film_ActorCreateManyFilmInputEnvelope>;
  delete?: InputMaybe<Array<Film_ActorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Film_ActorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Film_ActorWhereUniqueInput>>;
  set?: InputMaybe<Array<Film_ActorWhereUniqueInput>>;
  update?: InputMaybe<Array<Film_ActorUpdateWithWhereUniqueWithoutFilmInput>>;
  updateMany?: InputMaybe<Array<Film_ActorUpdateManyWithWhereWithoutFilmInput>>;
  upsert?: InputMaybe<Array<Film_ActorUpsertWithWhereUniqueWithoutFilmInput>>;
};

export type Film_ActorUpdateWithWhereUniqueWithoutActorInput = {
  data: Film_ActorUpdateWithoutActorInput;
  where: Film_ActorWhereUniqueInput;
};

export type Film_ActorUpdateWithWhereUniqueWithoutFilmInput = {
  data: Film_ActorUpdateWithoutFilmInput;
  where: Film_ActorWhereUniqueInput;
};

export type Film_ActorUpdateWithoutActorInput = {
  film?: InputMaybe<FilmUpdateOneRequiredWithoutFilm_ActorNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Film_ActorUpdateWithoutFilmInput = {
  actor?: InputMaybe<ActorUpdateOneRequiredWithoutFilm_ActorNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Film_ActorUpsertWithWhereUniqueWithoutActorInput = {
  create: Film_ActorCreateWithoutActorInput;
  update: Film_ActorUpdateWithoutActorInput;
  where: Film_ActorWhereUniqueInput;
};

export type Film_ActorUpsertWithWhereUniqueWithoutFilmInput = {
  create: Film_ActorCreateWithoutFilmInput;
  update: Film_ActorUpdateWithoutFilmInput;
  where: Film_ActorWhereUniqueInput;
};

export type Film_ActorWhereInput = {
  AND?: InputMaybe<Array<Film_ActorWhereInput>>;
  NOT?: InputMaybe<Array<Film_ActorWhereInput>>;
  OR?: InputMaybe<Array<Film_ActorWhereInput>>;
  actor?: InputMaybe<ActorRelationFilter>;
  actor_id?: InputMaybe<IntFilter>;
  film?: InputMaybe<FilmRelationFilter>;
  film_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
};

export type Film_ActorWhereUniqueInput = {
  AND?: InputMaybe<Array<Film_ActorWhereInput>>;
  NOT?: InputMaybe<Array<Film_ActorWhereInput>>;
  OR?: InputMaybe<Array<Film_ActorWhereInput>>;
  actor?: InputMaybe<ActorRelationFilter>;
  actor_id?: InputMaybe<IntFilter>;
  actor_id_film_id?: InputMaybe<Film_ActorActor_IdFilm_IdCompoundUniqueInput>;
  film?: InputMaybe<FilmRelationFilter>;
  film_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
};

export type Film_Category = {
  __typename?: 'Film_category';
  category: Category;
  category_id: Scalars['Int']['output'];
  film: Film;
  film_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
};

export type Film_CategoryAvgAggregate = {
  __typename?: 'Film_categoryAvgAggregate';
  category_id?: Maybe<Scalars['Float']['output']>;
  film_id?: Maybe<Scalars['Float']['output']>;
};

export type Film_CategoryAvgOrderByAggregateInput = {
  category_id?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
};

export type Film_CategoryCountAggregate = {
  __typename?: 'Film_categoryCountAggregate';
  _all: Scalars['Int']['output'];
  category_id: Scalars['Int']['output'];
  film_id: Scalars['Int']['output'];
  last_update: Scalars['Int']['output'];
};

export type Film_CategoryCountOrderByAggregateInput = {
  category_id?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type Film_CategoryCreateInput = {
  category: CategoryCreateNestedOneWithoutFilm_CategoryInput;
  film: FilmCreateNestedOneWithoutFilm_CategoryInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type Film_CategoryCreateManyCategoryInput = {
  film_id: Scalars['Int']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type Film_CategoryCreateManyCategoryInputEnvelope = {
  data: Array<Film_CategoryCreateManyCategoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Film_CategoryCreateManyFilmInput = {
  category_id: Scalars['Int']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type Film_CategoryCreateManyFilmInputEnvelope = {
  data: Array<Film_CategoryCreateManyFilmInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Film_CategoryCreateManyInput = {
  category_id: Scalars['Int']['input'];
  film_id: Scalars['Int']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type Film_CategoryCreateNestedManyWithoutCategoryInput = {
  connect?: InputMaybe<Array<Film_CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Film_CategoryCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<Film_CategoryCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<Film_CategoryCreateManyCategoryInputEnvelope>;
};

export type Film_CategoryCreateNestedManyWithoutFilmInput = {
  connect?: InputMaybe<Array<Film_CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Film_CategoryCreateOrConnectWithoutFilmInput>>;
  create?: InputMaybe<Array<Film_CategoryCreateWithoutFilmInput>>;
  createMany?: InputMaybe<Film_CategoryCreateManyFilmInputEnvelope>;
};

export type Film_CategoryCreateOrConnectWithoutCategoryInput = {
  create: Film_CategoryCreateWithoutCategoryInput;
  where: Film_CategoryWhereUniqueInput;
};

export type Film_CategoryCreateOrConnectWithoutFilmInput = {
  create: Film_CategoryCreateWithoutFilmInput;
  where: Film_CategoryWhereUniqueInput;
};

export type Film_CategoryCreateWithoutCategoryInput = {
  film: FilmCreateNestedOneWithoutFilm_CategoryInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type Film_CategoryCreateWithoutFilmInput = {
  category: CategoryCreateNestedOneWithoutFilm_CategoryInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type Film_CategoryGroupBy = {
  __typename?: 'Film_categoryGroupBy';
  _avg?: Maybe<Film_CategoryAvgAggregate>;
  _count?: Maybe<Film_CategoryCountAggregate>;
  _max?: Maybe<Film_CategoryMaxAggregate>;
  _min?: Maybe<Film_CategoryMinAggregate>;
  _sum?: Maybe<Film_CategorySumAggregate>;
  category_id: Scalars['Int']['output'];
  film_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
};

export type Film_CategoryListRelationFilter = {
  every?: InputMaybe<Film_CategoryWhereInput>;
  none?: InputMaybe<Film_CategoryWhereInput>;
  some?: InputMaybe<Film_CategoryWhereInput>;
};

export type Film_CategoryMaxAggregate = {
  __typename?: 'Film_categoryMaxAggregate';
  category_id?: Maybe<Scalars['Int']['output']>;
  film_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type Film_CategoryMaxOrderByAggregateInput = {
  category_id?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type Film_CategoryMinAggregate = {
  __typename?: 'Film_categoryMinAggregate';
  category_id?: Maybe<Scalars['Int']['output']>;
  film_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type Film_CategoryMinOrderByAggregateInput = {
  category_id?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type Film_CategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Film_CategoryOrderByWithAggregationInput = {
  _avg?: InputMaybe<Film_CategoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<Film_CategoryCountOrderByAggregateInput>;
  _max?: InputMaybe<Film_CategoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<Film_CategoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<Film_CategorySumOrderByAggregateInput>;
  category_id?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export type Film_CategoryOrderByWithRelationInput = {
  category?: InputMaybe<CategoryOrderByWithRelationInput>;
  category_id?: InputMaybe<SortOrder>;
  film?: InputMaybe<FilmOrderByWithRelationInput>;
  film_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
};

export enum Film_CategoryScalarFieldEnum {
  CategoryId = 'category_id',
  FilmId = 'film_id',
  LastUpdate = 'last_update'
}

export type Film_CategoryScalarWhereInput = {
  AND?: InputMaybe<Array<Film_CategoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<Film_CategoryScalarWhereInput>>;
  OR?: InputMaybe<Array<Film_CategoryScalarWhereInput>>;
  category_id?: InputMaybe<IntFilter>;
  film_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
};

export type Film_CategoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<Film_CategoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<Film_CategoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<Film_CategoryScalarWhereWithAggregatesInput>>;
  category_id?: InputMaybe<IntWithAggregatesFilter>;
  film_id?: InputMaybe<IntWithAggregatesFilter>;
  last_update?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type Film_CategorySumAggregate = {
  __typename?: 'Film_categorySumAggregate';
  category_id?: Maybe<Scalars['Int']['output']>;
  film_id?: Maybe<Scalars['Int']['output']>;
};

export type Film_CategorySumOrderByAggregateInput = {
  category_id?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
};

export type Film_CategoryUpdateInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutFilm_CategoryNestedInput>;
  film?: InputMaybe<FilmUpdateOneRequiredWithoutFilm_CategoryNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Film_CategoryUpdateManyMutationInput = {
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Film_CategoryUpdateManyWithWhereWithoutCategoryInput = {
  data: Film_CategoryUpdateManyMutationInput;
  where: Film_CategoryScalarWhereInput;
};

export type Film_CategoryUpdateManyWithWhereWithoutFilmInput = {
  data: Film_CategoryUpdateManyMutationInput;
  where: Film_CategoryScalarWhereInput;
};

export type Film_CategoryUpdateManyWithoutCategoryNestedInput = {
  connect?: InputMaybe<Array<Film_CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Film_CategoryCreateOrConnectWithoutCategoryInput>>;
  create?: InputMaybe<Array<Film_CategoryCreateWithoutCategoryInput>>;
  createMany?: InputMaybe<Film_CategoryCreateManyCategoryInputEnvelope>;
  delete?: InputMaybe<Array<Film_CategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Film_CategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Film_CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<Film_CategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<Film_CategoryUpdateWithWhereUniqueWithoutCategoryInput>>;
  updateMany?: InputMaybe<Array<Film_CategoryUpdateManyWithWhereWithoutCategoryInput>>;
  upsert?: InputMaybe<Array<Film_CategoryUpsertWithWhereUniqueWithoutCategoryInput>>;
};

export type Film_CategoryUpdateManyWithoutFilmNestedInput = {
  connect?: InputMaybe<Array<Film_CategoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Film_CategoryCreateOrConnectWithoutFilmInput>>;
  create?: InputMaybe<Array<Film_CategoryCreateWithoutFilmInput>>;
  createMany?: InputMaybe<Film_CategoryCreateManyFilmInputEnvelope>;
  delete?: InputMaybe<Array<Film_CategoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Film_CategoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Film_CategoryWhereUniqueInput>>;
  set?: InputMaybe<Array<Film_CategoryWhereUniqueInput>>;
  update?: InputMaybe<Array<Film_CategoryUpdateWithWhereUniqueWithoutFilmInput>>;
  updateMany?: InputMaybe<Array<Film_CategoryUpdateManyWithWhereWithoutFilmInput>>;
  upsert?: InputMaybe<Array<Film_CategoryUpsertWithWhereUniqueWithoutFilmInput>>;
};

export type Film_CategoryUpdateWithWhereUniqueWithoutCategoryInput = {
  data: Film_CategoryUpdateWithoutCategoryInput;
  where: Film_CategoryWhereUniqueInput;
};

export type Film_CategoryUpdateWithWhereUniqueWithoutFilmInput = {
  data: Film_CategoryUpdateWithoutFilmInput;
  where: Film_CategoryWhereUniqueInput;
};

export type Film_CategoryUpdateWithoutCategoryInput = {
  film?: InputMaybe<FilmUpdateOneRequiredWithoutFilm_CategoryNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Film_CategoryUpdateWithoutFilmInput = {
  category?: InputMaybe<CategoryUpdateOneRequiredWithoutFilm_CategoryNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type Film_CategoryUpsertWithWhereUniqueWithoutCategoryInput = {
  create: Film_CategoryCreateWithoutCategoryInput;
  update: Film_CategoryUpdateWithoutCategoryInput;
  where: Film_CategoryWhereUniqueInput;
};

export type Film_CategoryUpsertWithWhereUniqueWithoutFilmInput = {
  create: Film_CategoryCreateWithoutFilmInput;
  update: Film_CategoryUpdateWithoutFilmInput;
  where: Film_CategoryWhereUniqueInput;
};

export type Film_CategoryWhereInput = {
  AND?: InputMaybe<Array<Film_CategoryWhereInput>>;
  NOT?: InputMaybe<Array<Film_CategoryWhereInput>>;
  OR?: InputMaybe<Array<Film_CategoryWhereInput>>;
  category?: InputMaybe<CategoryRelationFilter>;
  category_id?: InputMaybe<IntFilter>;
  film?: InputMaybe<FilmRelationFilter>;
  film_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
};

export type Film_CategoryWhereUniqueInput = {
  AND?: InputMaybe<Array<Film_CategoryWhereInput>>;
  NOT?: InputMaybe<Array<Film_CategoryWhereInput>>;
  OR?: InputMaybe<Array<Film_CategoryWhereInput>>;
  category?: InputMaybe<CategoryRelationFilter>;
  category_id?: InputMaybe<IntFilter>;
  film?: InputMaybe<FilmRelationFilter>;
  film_id?: InputMaybe<IntFilter>;
  film_id_category_id?: InputMaybe<Film_CategoryFilm_IdCategory_IdCompoundUniqueInput>;
  last_update?: InputMaybe<DateTimeFilter>;
};

export type Film_Text = {
  __typename?: 'Film_text';
  description?: Maybe<Scalars['String']['output']>;
  film_id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Film_TextAvgAggregate = {
  __typename?: 'Film_textAvgAggregate';
  film_id?: Maybe<Scalars['Float']['output']>;
};

export type Film_TextAvgOrderByAggregateInput = {
  film_id?: InputMaybe<SortOrder>;
};

export type Film_TextCountAggregate = {
  __typename?: 'Film_textCountAggregate';
  _all: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  film_id: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
};

export type Film_TextCountOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Film_TextCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  film_id: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type Film_TextCreateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  film_id: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type Film_TextGroupBy = {
  __typename?: 'Film_textGroupBy';
  _avg?: Maybe<Film_TextAvgAggregate>;
  _count?: Maybe<Film_TextCountAggregate>;
  _max?: Maybe<Film_TextMaxAggregate>;
  _min?: Maybe<Film_TextMinAggregate>;
  _sum?: Maybe<Film_TextSumAggregate>;
  description?: Maybe<Scalars['String']['output']>;
  film_id: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Film_TextMaxAggregate = {
  __typename?: 'Film_textMaxAggregate';
  description?: Maybe<Scalars['String']['output']>;
  film_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Film_TextMaxOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Film_TextMinAggregate = {
  __typename?: 'Film_textMinAggregate';
  description?: Maybe<Scalars['String']['output']>;
  film_id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Film_TextMinOrderByAggregateInput = {
  description?: InputMaybe<SortOrder>;
  film_id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Film_TextOrderByWithAggregationInput = {
  _avg?: InputMaybe<Film_TextAvgOrderByAggregateInput>;
  _count?: InputMaybe<Film_TextCountOrderByAggregateInput>;
  _max?: InputMaybe<Film_TextMaxOrderByAggregateInput>;
  _min?: InputMaybe<Film_TextMinOrderByAggregateInput>;
  _sum?: InputMaybe<Film_TextSumOrderByAggregateInput>;
  description?: InputMaybe<SortOrderInput>;
  film_id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Film_TextOrderByWithRelationInput = {
  description?: InputMaybe<SortOrderInput>;
  film_id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export enum Film_TextScalarFieldEnum {
  Description = 'description',
  FilmId = 'film_id',
  Title = 'title'
}

export type Film_TextScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<Film_TextScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<Film_TextScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<Film_TextScalarWhereWithAggregatesInput>>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  film_id?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type Film_TextSumAggregate = {
  __typename?: 'Film_textSumAggregate';
  film_id?: Maybe<Scalars['Int']['output']>;
};

export type Film_TextSumOrderByAggregateInput = {
  film_id?: InputMaybe<SortOrder>;
};

export type Film_TextUpdateInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  film_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type Film_TextUpdateManyMutationInput = {
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  film_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type Film_TextWhereInput = {
  AND?: InputMaybe<Array<Film_TextWhereInput>>;
  NOT?: InputMaybe<Array<Film_TextWhereInput>>;
  OR?: InputMaybe<Array<Film_TextWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  film_id?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type Film_TextWhereUniqueInput = {
  AND?: InputMaybe<Array<Film_TextWhereInput>>;
  NOT?: InputMaybe<Array<Film_TextWhereInput>>;
  OR?: InputMaybe<Array<Film_TextWhereInput>>;
  description?: InputMaybe<StringNullableFilter>;
  film_id?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<StringFilter>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Inventory = {
  __typename?: 'Inventory';
  _count?: Maybe<InventoryCount>;
  film: Film;
  film_id: Scalars['Int']['output'];
  inventory_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
  rental: Array<Rental>;
  store: Store;
  store_id: Scalars['Int']['output'];
};


export type InventoryRentalArgs = {
  cursor?: InputMaybe<RentalWhereUniqueInput>;
  distinct?: InputMaybe<Array<RentalScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RentalOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RentalWhereInput>;
};

export type InventoryAvgAggregate = {
  __typename?: 'InventoryAvgAggregate';
  film_id?: Maybe<Scalars['Float']['output']>;
  inventory_id?: Maybe<Scalars['Float']['output']>;
  store_id?: Maybe<Scalars['Float']['output']>;
};

export type InventoryAvgOrderByAggregateInput = {
  film_id?: InputMaybe<SortOrder>;
  inventory_id?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type InventoryCount = {
  __typename?: 'InventoryCount';
  rental: Scalars['Int']['output'];
};


export type InventoryCountRentalArgs = {
  where?: InputMaybe<RentalWhereInput>;
};

export type InventoryCountAggregate = {
  __typename?: 'InventoryCountAggregate';
  _all: Scalars['Int']['output'];
  film_id: Scalars['Int']['output'];
  inventory_id: Scalars['Int']['output'];
  last_update: Scalars['Int']['output'];
  store_id: Scalars['Int']['output'];
};

export type InventoryCountOrderByAggregateInput = {
  film_id?: InputMaybe<SortOrder>;
  inventory_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type InventoryCreateInput = {
  film: FilmCreateNestedOneWithoutInventoryInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  rental?: InputMaybe<RentalCreateNestedManyWithoutInventoryInput>;
  store: StoreCreateNestedOneWithoutInventoryInput;
};

export type InventoryCreateManyFilmInput = {
  inventory_id?: InputMaybe<Scalars['Int']['input']>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  store_id: Scalars['Int']['input'];
};

export type InventoryCreateManyFilmInputEnvelope = {
  data: Array<InventoryCreateManyFilmInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InventoryCreateManyInput = {
  film_id: Scalars['Int']['input'];
  inventory_id?: InputMaybe<Scalars['Int']['input']>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  store_id: Scalars['Int']['input'];
};

export type InventoryCreateManyStoreInput = {
  film_id: Scalars['Int']['input'];
  inventory_id?: InputMaybe<Scalars['Int']['input']>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type InventoryCreateManyStoreInputEnvelope = {
  data: Array<InventoryCreateManyStoreInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InventoryCreateNestedManyWithoutFilmInput = {
  connect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InventoryCreateOrConnectWithoutFilmInput>>;
  create?: InputMaybe<Array<InventoryCreateWithoutFilmInput>>;
  createMany?: InputMaybe<InventoryCreateManyFilmInputEnvelope>;
};

export type InventoryCreateNestedManyWithoutStoreInput = {
  connect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InventoryCreateOrConnectWithoutStoreInput>>;
  create?: InputMaybe<Array<InventoryCreateWithoutStoreInput>>;
  createMany?: InputMaybe<InventoryCreateManyStoreInputEnvelope>;
};

export type InventoryCreateNestedOneWithoutRentalInput = {
  connect?: InputMaybe<InventoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<InventoryCreateOrConnectWithoutRentalInput>;
  create?: InputMaybe<InventoryCreateWithoutRentalInput>;
};

export type InventoryCreateOrConnectWithoutFilmInput = {
  create: InventoryCreateWithoutFilmInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryCreateOrConnectWithoutRentalInput = {
  create: InventoryCreateWithoutRentalInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryCreateOrConnectWithoutStoreInput = {
  create: InventoryCreateWithoutStoreInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryCreateWithoutFilmInput = {
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  rental?: InputMaybe<RentalCreateNestedManyWithoutInventoryInput>;
  store: StoreCreateNestedOneWithoutInventoryInput;
};

export type InventoryCreateWithoutRentalInput = {
  film: FilmCreateNestedOneWithoutInventoryInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  store: StoreCreateNestedOneWithoutInventoryInput;
};

export type InventoryCreateWithoutStoreInput = {
  film: FilmCreateNestedOneWithoutInventoryInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  rental?: InputMaybe<RentalCreateNestedManyWithoutInventoryInput>;
};

export type InventoryGroupBy = {
  __typename?: 'InventoryGroupBy';
  _avg?: Maybe<InventoryAvgAggregate>;
  _count?: Maybe<InventoryCountAggregate>;
  _max?: Maybe<InventoryMaxAggregate>;
  _min?: Maybe<InventoryMinAggregate>;
  _sum?: Maybe<InventorySumAggregate>;
  film_id: Scalars['Int']['output'];
  inventory_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
  store_id: Scalars['Int']['output'];
};

export type InventoryListRelationFilter = {
  every?: InputMaybe<InventoryWhereInput>;
  none?: InputMaybe<InventoryWhereInput>;
  some?: InputMaybe<InventoryWhereInput>;
};

export type InventoryMaxAggregate = {
  __typename?: 'InventoryMaxAggregate';
  film_id?: Maybe<Scalars['Int']['output']>;
  inventory_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  store_id?: Maybe<Scalars['Int']['output']>;
};

export type InventoryMaxOrderByAggregateInput = {
  film_id?: InputMaybe<SortOrder>;
  inventory_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type InventoryMinAggregate = {
  __typename?: 'InventoryMinAggregate';
  film_id?: Maybe<Scalars['Int']['output']>;
  inventory_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  store_id?: Maybe<Scalars['Int']['output']>;
};

export type InventoryMinOrderByAggregateInput = {
  film_id?: InputMaybe<SortOrder>;
  inventory_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type InventoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type InventoryOrderByWithAggregationInput = {
  _avg?: InputMaybe<InventoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<InventoryCountOrderByAggregateInput>;
  _max?: InputMaybe<InventoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<InventoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<InventorySumOrderByAggregateInput>;
  film_id?: InputMaybe<SortOrder>;
  inventory_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type InventoryOrderByWithRelationInput = {
  film?: InputMaybe<FilmOrderByWithRelationInput>;
  film_id?: InputMaybe<SortOrder>;
  inventory_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  rental?: InputMaybe<RentalOrderByRelationAggregateInput>;
  store?: InputMaybe<StoreOrderByWithRelationInput>;
  store_id?: InputMaybe<SortOrder>;
};

export type InventoryRelationFilter = {
  is?: InputMaybe<InventoryWhereInput>;
  isNot?: InputMaybe<InventoryWhereInput>;
};

export enum InventoryScalarFieldEnum {
  FilmId = 'film_id',
  InventoryId = 'inventory_id',
  LastUpdate = 'last_update',
  StoreId = 'store_id'
}

export type InventoryScalarWhereInput = {
  AND?: InputMaybe<Array<InventoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<InventoryScalarWhereInput>>;
  OR?: InputMaybe<Array<InventoryScalarWhereInput>>;
  film_id?: InputMaybe<IntFilter>;
  inventory_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  store_id?: InputMaybe<IntFilter>;
};

export type InventoryScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<InventoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<InventoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<InventoryScalarWhereWithAggregatesInput>>;
  film_id?: InputMaybe<IntWithAggregatesFilter>;
  inventory_id?: InputMaybe<IntWithAggregatesFilter>;
  last_update?: InputMaybe<DateTimeWithAggregatesFilter>;
  store_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type InventorySumAggregate = {
  __typename?: 'InventorySumAggregate';
  film_id?: Maybe<Scalars['Int']['output']>;
  inventory_id?: Maybe<Scalars['Int']['output']>;
  store_id?: Maybe<Scalars['Int']['output']>;
};

export type InventorySumOrderByAggregateInput = {
  film_id?: InputMaybe<SortOrder>;
  inventory_id?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type InventoryUpdateInput = {
  film?: InputMaybe<FilmUpdateOneRequiredWithoutInventoryNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  rental?: InputMaybe<RentalUpdateManyWithoutInventoryNestedInput>;
  store?: InputMaybe<StoreUpdateOneRequiredWithoutInventoryNestedInput>;
};

export type InventoryUpdateManyMutationInput = {
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type InventoryUpdateManyWithWhereWithoutFilmInput = {
  data: InventoryUpdateManyMutationInput;
  where: InventoryScalarWhereInput;
};

export type InventoryUpdateManyWithWhereWithoutStoreInput = {
  data: InventoryUpdateManyMutationInput;
  where: InventoryScalarWhereInput;
};

export type InventoryUpdateManyWithoutFilmNestedInput = {
  connect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InventoryCreateOrConnectWithoutFilmInput>>;
  create?: InputMaybe<Array<InventoryCreateWithoutFilmInput>>;
  createMany?: InputMaybe<InventoryCreateManyFilmInputEnvelope>;
  delete?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InventoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  set?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  update?: InputMaybe<Array<InventoryUpdateWithWhereUniqueWithoutFilmInput>>;
  updateMany?: InputMaybe<Array<InventoryUpdateManyWithWhereWithoutFilmInput>>;
  upsert?: InputMaybe<Array<InventoryUpsertWithWhereUniqueWithoutFilmInput>>;
};

export type InventoryUpdateManyWithoutStoreNestedInput = {
  connect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<InventoryCreateOrConnectWithoutStoreInput>>;
  create?: InputMaybe<Array<InventoryCreateWithoutStoreInput>>;
  createMany?: InputMaybe<InventoryCreateManyStoreInputEnvelope>;
  delete?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InventoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  set?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  update?: InputMaybe<Array<InventoryUpdateWithWhereUniqueWithoutStoreInput>>;
  updateMany?: InputMaybe<Array<InventoryUpdateManyWithWhereWithoutStoreInput>>;
  upsert?: InputMaybe<Array<InventoryUpsertWithWhereUniqueWithoutStoreInput>>;
};

export type InventoryUpdateOneRequiredWithoutRentalNestedInput = {
  connect?: InputMaybe<InventoryWhereUniqueInput>;
  connectOrCreate?: InputMaybe<InventoryCreateOrConnectWithoutRentalInput>;
  create?: InputMaybe<InventoryCreateWithoutRentalInput>;
  update?: InputMaybe<InventoryUpdateToOneWithWhereWithoutRentalInput>;
  upsert?: InputMaybe<InventoryUpsertWithoutRentalInput>;
};

export type InventoryUpdateToOneWithWhereWithoutRentalInput = {
  data: InventoryUpdateWithoutRentalInput;
  where?: InputMaybe<InventoryWhereInput>;
};

export type InventoryUpdateWithWhereUniqueWithoutFilmInput = {
  data: InventoryUpdateWithoutFilmInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryUpdateWithWhereUniqueWithoutStoreInput = {
  data: InventoryUpdateWithoutStoreInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryUpdateWithoutFilmInput = {
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  rental?: InputMaybe<RentalUpdateManyWithoutInventoryNestedInput>;
  store?: InputMaybe<StoreUpdateOneRequiredWithoutInventoryNestedInput>;
};

export type InventoryUpdateWithoutRentalInput = {
  film?: InputMaybe<FilmUpdateOneRequiredWithoutInventoryNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  store?: InputMaybe<StoreUpdateOneRequiredWithoutInventoryNestedInput>;
};

export type InventoryUpdateWithoutStoreInput = {
  film?: InputMaybe<FilmUpdateOneRequiredWithoutInventoryNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  rental?: InputMaybe<RentalUpdateManyWithoutInventoryNestedInput>;
};

export type InventoryUpsertWithWhereUniqueWithoutFilmInput = {
  create: InventoryCreateWithoutFilmInput;
  update: InventoryUpdateWithoutFilmInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryUpsertWithWhereUniqueWithoutStoreInput = {
  create: InventoryCreateWithoutStoreInput;
  update: InventoryUpdateWithoutStoreInput;
  where: InventoryWhereUniqueInput;
};

export type InventoryUpsertWithoutRentalInput = {
  create: InventoryCreateWithoutRentalInput;
  update: InventoryUpdateWithoutRentalInput;
  where?: InputMaybe<InventoryWhereInput>;
};

export type InventoryWhereInput = {
  AND?: InputMaybe<Array<InventoryWhereInput>>;
  NOT?: InputMaybe<Array<InventoryWhereInput>>;
  OR?: InputMaybe<Array<InventoryWhereInput>>;
  film?: InputMaybe<FilmRelationFilter>;
  film_id?: InputMaybe<IntFilter>;
  inventory_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  rental?: InputMaybe<RentalListRelationFilter>;
  store?: InputMaybe<StoreRelationFilter>;
  store_id?: InputMaybe<IntFilter>;
};

export type InventoryWhereUniqueInput = {
  AND?: InputMaybe<Array<InventoryWhereInput>>;
  NOT?: InputMaybe<Array<InventoryWhereInput>>;
  OR?: InputMaybe<Array<InventoryWhereInput>>;
  film?: InputMaybe<FilmRelationFilter>;
  film_id?: InputMaybe<IntFilter>;
  inventory_id?: InputMaybe<Scalars['Int']['input']>;
  last_update?: InputMaybe<DateTimeFilter>;
  rental?: InputMaybe<RentalListRelationFilter>;
  store?: InputMaybe<StoreRelationFilter>;
  store_id?: InputMaybe<IntFilter>;
};

export type Language = {
  __typename?: 'Language';
  _count?: Maybe<LanguageCount>;
  film_film_language_idTolanguage: Array<Film>;
  film_film_original_language_idTolanguage: Array<Film>;
  language_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
  name: Scalars['String']['output'];
};


export type LanguageFilm_Film_Language_IdTolanguageArgs = {
  cursor?: InputMaybe<FilmWhereUniqueInput>;
  distinct?: InputMaybe<Array<FilmScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FilmOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FilmWhereInput>;
};


export type LanguageFilm_Film_Original_Language_IdTolanguageArgs = {
  cursor?: InputMaybe<FilmWhereUniqueInput>;
  distinct?: InputMaybe<Array<FilmScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FilmOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FilmWhereInput>;
};

export type LanguageAvgAggregate = {
  __typename?: 'LanguageAvgAggregate';
  language_id?: Maybe<Scalars['Float']['output']>;
};

export type LanguageAvgOrderByAggregateInput = {
  language_id?: InputMaybe<SortOrder>;
};

export type LanguageCount = {
  __typename?: 'LanguageCount';
  film_film_language_idTolanguage: Scalars['Int']['output'];
  film_film_original_language_idTolanguage: Scalars['Int']['output'];
};


export type LanguageCountFilm_Film_Language_IdTolanguageArgs = {
  where?: InputMaybe<FilmWhereInput>;
};


export type LanguageCountFilm_Film_Original_Language_IdTolanguageArgs = {
  where?: InputMaybe<FilmWhereInput>;
};

export type LanguageCountAggregate = {
  __typename?: 'LanguageCountAggregate';
  _all: Scalars['Int']['output'];
  language_id: Scalars['Int']['output'];
  last_update: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type LanguageCountOrderByAggregateInput = {
  language_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type LanguageCreateInput = {
  film_film_language_idTolanguage?: InputMaybe<FilmCreateNestedManyWithoutLanguage_Film_Language_IdTolanguageInput>;
  film_film_original_language_idTolanguage?: InputMaybe<FilmCreateNestedManyWithoutLanguage_Film_Original_Language_IdTolanguageInput>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  name: Scalars['String']['input'];
};

export type LanguageCreateManyInput = {
  language_id?: InputMaybe<Scalars['Int']['input']>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  name: Scalars['String']['input'];
};

export type LanguageCreateNestedOneWithoutFilm_Film_Language_IdTolanguageInput = {
  connect?: InputMaybe<LanguageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LanguageCreateOrConnectWithoutFilm_Film_Language_IdTolanguageInput>;
  create?: InputMaybe<LanguageCreateWithoutFilm_Film_Language_IdTolanguageInput>;
};

export type LanguageCreateNestedOneWithoutFilm_Film_Original_Language_IdTolanguageInput = {
  connect?: InputMaybe<LanguageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LanguageCreateOrConnectWithoutFilm_Film_Original_Language_IdTolanguageInput>;
  create?: InputMaybe<LanguageCreateWithoutFilm_Film_Original_Language_IdTolanguageInput>;
};

export type LanguageCreateOrConnectWithoutFilm_Film_Language_IdTolanguageInput = {
  create: LanguageCreateWithoutFilm_Film_Language_IdTolanguageInput;
  where: LanguageWhereUniqueInput;
};

export type LanguageCreateOrConnectWithoutFilm_Film_Original_Language_IdTolanguageInput = {
  create: LanguageCreateWithoutFilm_Film_Original_Language_IdTolanguageInput;
  where: LanguageWhereUniqueInput;
};

export type LanguageCreateWithoutFilm_Film_Language_IdTolanguageInput = {
  film_film_original_language_idTolanguage?: InputMaybe<FilmCreateNestedManyWithoutLanguage_Film_Original_Language_IdTolanguageInput>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  name: Scalars['String']['input'];
};

export type LanguageCreateWithoutFilm_Film_Original_Language_IdTolanguageInput = {
  film_film_language_idTolanguage?: InputMaybe<FilmCreateNestedManyWithoutLanguage_Film_Language_IdTolanguageInput>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  name: Scalars['String']['input'];
};

export type LanguageGroupBy = {
  __typename?: 'LanguageGroupBy';
  _avg?: Maybe<LanguageAvgAggregate>;
  _count?: Maybe<LanguageCountAggregate>;
  _max?: Maybe<LanguageMaxAggregate>;
  _min?: Maybe<LanguageMinAggregate>;
  _sum?: Maybe<LanguageSumAggregate>;
  language_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
  name: Scalars['String']['output'];
};

export type LanguageMaxAggregate = {
  __typename?: 'LanguageMaxAggregate';
  language_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type LanguageMaxOrderByAggregateInput = {
  language_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type LanguageMinAggregate = {
  __typename?: 'LanguageMinAggregate';
  language_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type LanguageMinOrderByAggregateInput = {
  language_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type LanguageNullableRelationFilter = {
  is?: InputMaybe<LanguageWhereInput>;
  isNot?: InputMaybe<LanguageWhereInput>;
};

export type LanguageOrderByWithAggregationInput = {
  _avg?: InputMaybe<LanguageAvgOrderByAggregateInput>;
  _count?: InputMaybe<LanguageCountOrderByAggregateInput>;
  _max?: InputMaybe<LanguageMaxOrderByAggregateInput>;
  _min?: InputMaybe<LanguageMinOrderByAggregateInput>;
  _sum?: InputMaybe<LanguageSumOrderByAggregateInput>;
  language_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type LanguageOrderByWithRelationInput = {
  film_film_language_idTolanguage?: InputMaybe<FilmOrderByRelationAggregateInput>;
  film_film_original_language_idTolanguage?: InputMaybe<FilmOrderByRelationAggregateInput>;
  language_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type LanguageRelationFilter = {
  is?: InputMaybe<LanguageWhereInput>;
  isNot?: InputMaybe<LanguageWhereInput>;
};

export enum LanguageScalarFieldEnum {
  LanguageId = 'language_id',
  LastUpdate = 'last_update',
  Name = 'name'
}

export type LanguageScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<LanguageScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LanguageScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LanguageScalarWhereWithAggregatesInput>>;
  language_id?: InputMaybe<IntWithAggregatesFilter>;
  last_update?: InputMaybe<DateTimeWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type LanguageSumAggregate = {
  __typename?: 'LanguageSumAggregate';
  language_id?: Maybe<Scalars['Int']['output']>;
};

export type LanguageSumOrderByAggregateInput = {
  language_id?: InputMaybe<SortOrder>;
};

export type LanguageUpdateInput = {
  film_film_language_idTolanguage?: InputMaybe<FilmUpdateManyWithoutLanguage_Film_Language_IdTolanguageNestedInput>;
  film_film_original_language_idTolanguage?: InputMaybe<FilmUpdateManyWithoutLanguage_Film_Original_Language_IdTolanguageNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LanguageUpdateManyMutationInput = {
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LanguageUpdateOneRequiredWithoutFilm_Film_Language_IdTolanguageNestedInput = {
  connect?: InputMaybe<LanguageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LanguageCreateOrConnectWithoutFilm_Film_Language_IdTolanguageInput>;
  create?: InputMaybe<LanguageCreateWithoutFilm_Film_Language_IdTolanguageInput>;
  update?: InputMaybe<LanguageUpdateToOneWithWhereWithoutFilm_Film_Language_IdTolanguageInput>;
  upsert?: InputMaybe<LanguageUpsertWithoutFilm_Film_Language_IdTolanguageInput>;
};

export type LanguageUpdateOneWithoutFilm_Film_Original_Language_IdTolanguageNestedInput = {
  connect?: InputMaybe<LanguageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<LanguageCreateOrConnectWithoutFilm_Film_Original_Language_IdTolanguageInput>;
  create?: InputMaybe<LanguageCreateWithoutFilm_Film_Original_Language_IdTolanguageInput>;
  delete?: InputMaybe<LanguageWhereInput>;
  disconnect?: InputMaybe<LanguageWhereInput>;
  update?: InputMaybe<LanguageUpdateToOneWithWhereWithoutFilm_Film_Original_Language_IdTolanguageInput>;
  upsert?: InputMaybe<LanguageUpsertWithoutFilm_Film_Original_Language_IdTolanguageInput>;
};

export type LanguageUpdateToOneWithWhereWithoutFilm_Film_Language_IdTolanguageInput = {
  data: LanguageUpdateWithoutFilm_Film_Language_IdTolanguageInput;
  where?: InputMaybe<LanguageWhereInput>;
};

export type LanguageUpdateToOneWithWhereWithoutFilm_Film_Original_Language_IdTolanguageInput = {
  data: LanguageUpdateWithoutFilm_Film_Original_Language_IdTolanguageInput;
  where?: InputMaybe<LanguageWhereInput>;
};

export type LanguageUpdateWithoutFilm_Film_Language_IdTolanguageInput = {
  film_film_original_language_idTolanguage?: InputMaybe<FilmUpdateManyWithoutLanguage_Film_Original_Language_IdTolanguageNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LanguageUpdateWithoutFilm_Film_Original_Language_IdTolanguageInput = {
  film_film_language_idTolanguage?: InputMaybe<FilmUpdateManyWithoutLanguage_Film_Language_IdTolanguageNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type LanguageUpsertWithoutFilm_Film_Language_IdTolanguageInput = {
  create: LanguageCreateWithoutFilm_Film_Language_IdTolanguageInput;
  update: LanguageUpdateWithoutFilm_Film_Language_IdTolanguageInput;
  where?: InputMaybe<LanguageWhereInput>;
};

export type LanguageUpsertWithoutFilm_Film_Original_Language_IdTolanguageInput = {
  create: LanguageCreateWithoutFilm_Film_Original_Language_IdTolanguageInput;
  update: LanguageUpdateWithoutFilm_Film_Original_Language_IdTolanguageInput;
  where?: InputMaybe<LanguageWhereInput>;
};

export type LanguageWhereInput = {
  AND?: InputMaybe<Array<LanguageWhereInput>>;
  NOT?: InputMaybe<Array<LanguageWhereInput>>;
  OR?: InputMaybe<Array<LanguageWhereInput>>;
  film_film_language_idTolanguage?: InputMaybe<FilmListRelationFilter>;
  film_film_original_language_idTolanguage?: InputMaybe<FilmListRelationFilter>;
  language_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  name?: InputMaybe<StringFilter>;
};

export type LanguageWhereUniqueInput = {
  AND?: InputMaybe<Array<LanguageWhereInput>>;
  NOT?: InputMaybe<Array<LanguageWhereInput>>;
  OR?: InputMaybe<Array<LanguageWhereInput>>;
  film_film_language_idTolanguage?: InputMaybe<FilmListRelationFilter>;
  film_film_original_language_idTolanguage?: InputMaybe<FilmListRelationFilter>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  last_update?: InputMaybe<DateTimeFilter>;
  name?: InputMaybe<StringFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyActor: AffectedRowsOutput;
  createManyCategory: AffectedRowsOutput;
  createManyCity: AffectedRowsOutput;
  createManyCountry: AffectedRowsOutput;
  createManyCustomer: AffectedRowsOutput;
  createManyFilm: AffectedRowsOutput;
  createManyFilm_actor: AffectedRowsOutput;
  createManyFilm_category: AffectedRowsOutput;
  createManyFilm_text: AffectedRowsOutput;
  createManyInventory: AffectedRowsOutput;
  createManyLanguage: AffectedRowsOutput;
  createManyPayment: AffectedRowsOutput;
  createManyRental: AffectedRowsOutput;
  createManyStaff: AffectedRowsOutput;
  createManyStore: AffectedRowsOutput;
  createOneActor: Actor;
  createOneCategory: Category;
  createOneCity: City;
  createOneCountry: Country;
  createOneCustomer: Customer;
  createOneFilm: Film;
  createOneFilm_actor: Film_Actor;
  createOneFilm_category: Film_Category;
  createOneFilm_text: Film_Text;
  createOneInventory: Inventory;
  createOneLanguage: Language;
  createOnePayment: Payment;
  createOneRental: Rental;
  createOneStaff: Staff;
  createOneStore: Store;
  deleteManyActor: AffectedRowsOutput;
  deleteManyAddress: AffectedRowsOutput;
  deleteManyCategory: AffectedRowsOutput;
  deleteManyCity: AffectedRowsOutput;
  deleteManyCountry: AffectedRowsOutput;
  deleteManyCustomer: AffectedRowsOutput;
  deleteManyFilm: AffectedRowsOutput;
  deleteManyFilm_actor: AffectedRowsOutput;
  deleteManyFilm_category: AffectedRowsOutput;
  deleteManyFilm_text: AffectedRowsOutput;
  deleteManyInventory: AffectedRowsOutput;
  deleteManyLanguage: AffectedRowsOutput;
  deleteManyPayment: AffectedRowsOutput;
  deleteManyRental: AffectedRowsOutput;
  deleteManyStaff: AffectedRowsOutput;
  deleteManyStore: AffectedRowsOutput;
  deleteOneActor?: Maybe<Actor>;
  deleteOneAddress?: Maybe<Address>;
  deleteOneCategory?: Maybe<Category>;
  deleteOneCity?: Maybe<City>;
  deleteOneCountry?: Maybe<Country>;
  deleteOneCustomer?: Maybe<Customer>;
  deleteOneFilm?: Maybe<Film>;
  deleteOneFilm_actor?: Maybe<Film_Actor>;
  deleteOneFilm_category?: Maybe<Film_Category>;
  deleteOneFilm_text?: Maybe<Film_Text>;
  deleteOneInventory?: Maybe<Inventory>;
  deleteOneLanguage?: Maybe<Language>;
  deleteOnePayment?: Maybe<Payment>;
  deleteOneRental?: Maybe<Rental>;
  deleteOneStaff?: Maybe<Staff>;
  deleteOneStore?: Maybe<Store>;
  updateManyActor: AffectedRowsOutput;
  updateManyAddress: AffectedRowsOutput;
  updateManyCategory: AffectedRowsOutput;
  updateManyCity: AffectedRowsOutput;
  updateManyCountry: AffectedRowsOutput;
  updateManyCustomer: AffectedRowsOutput;
  updateManyFilm: AffectedRowsOutput;
  updateManyFilm_actor: AffectedRowsOutput;
  updateManyFilm_category: AffectedRowsOutput;
  updateManyFilm_text: AffectedRowsOutput;
  updateManyInventory: AffectedRowsOutput;
  updateManyLanguage: AffectedRowsOutput;
  updateManyPayment: AffectedRowsOutput;
  updateManyRental: AffectedRowsOutput;
  updateManyStaff: AffectedRowsOutput;
  updateManyStore: AffectedRowsOutput;
  updateOneActor?: Maybe<Actor>;
  updateOneAddress?: Maybe<Address>;
  updateOneCategory?: Maybe<Category>;
  updateOneCity?: Maybe<City>;
  updateOneCountry?: Maybe<Country>;
  updateOneCustomer?: Maybe<Customer>;
  updateOneFilm?: Maybe<Film>;
  updateOneFilm_actor?: Maybe<Film_Actor>;
  updateOneFilm_category?: Maybe<Film_Category>;
  updateOneFilm_text?: Maybe<Film_Text>;
  updateOneInventory?: Maybe<Inventory>;
  updateOneLanguage?: Maybe<Language>;
  updateOnePayment?: Maybe<Payment>;
  updateOneRental?: Maybe<Rental>;
  updateOneStaff?: Maybe<Staff>;
  updateOneStore?: Maybe<Store>;
  upsertOneActor: Actor;
  upsertOneCategory: Category;
  upsertOneCity: City;
  upsertOneCountry: Country;
  upsertOneCustomer: Customer;
  upsertOneFilm: Film;
  upsertOneFilm_actor: Film_Actor;
  upsertOneFilm_category: Film_Category;
  upsertOneFilm_text: Film_Text;
  upsertOneInventory: Inventory;
  upsertOneLanguage: Language;
  upsertOnePayment: Payment;
  upsertOneRental: Rental;
  upsertOneStaff: Staff;
  upsertOneStore: Store;
};


export type MutationCreateManyActorArgs = {
  data: Array<ActorCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCategoryArgs = {
  data: Array<CategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCityArgs = {
  data: Array<CityCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCountryArgs = {
  data: Array<CountryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCustomerArgs = {
  data: Array<CustomerCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyFilmArgs = {
  data: Array<FilmCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyFilm_ActorArgs = {
  data: Array<Film_ActorCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyFilm_CategoryArgs = {
  data: Array<Film_CategoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyFilm_TextArgs = {
  data: Array<Film_TextCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyInventoryArgs = {
  data: Array<InventoryCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyLanguageArgs = {
  data: Array<LanguageCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyPaymentArgs = {
  data: Array<PaymentCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyRentalArgs = {
  data: Array<RentalCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyStaffArgs = {
  data: Array<StaffCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyStoreArgs = {
  data: Array<StoreCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneActorArgs = {
  data: ActorCreateInput;
};


export type MutationCreateOneCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateOneCityArgs = {
  data: CityCreateInput;
};


export type MutationCreateOneCountryArgs = {
  data: CountryCreateInput;
};


export type MutationCreateOneCustomerArgs = {
  data: CustomerCreateInput;
};


export type MutationCreateOneFilmArgs = {
  data: FilmCreateInput;
};


export type MutationCreateOneFilm_ActorArgs = {
  data: Film_ActorCreateInput;
};


export type MutationCreateOneFilm_CategoryArgs = {
  data: Film_CategoryCreateInput;
};


export type MutationCreateOneFilm_TextArgs = {
  data: Film_TextCreateInput;
};


export type MutationCreateOneInventoryArgs = {
  data: InventoryCreateInput;
};


export type MutationCreateOneLanguageArgs = {
  data: LanguageCreateInput;
};


export type MutationCreateOnePaymentArgs = {
  data: PaymentCreateInput;
};


export type MutationCreateOneRentalArgs = {
  data: RentalCreateInput;
};


export type MutationCreateOneStaffArgs = {
  data: StaffCreateInput;
};


export type MutationCreateOneStoreArgs = {
  data: StoreCreateInput;
};


export type MutationDeleteManyActorArgs = {
  where?: InputMaybe<ActorWhereInput>;
};


export type MutationDeleteManyAddressArgs = {
  where?: InputMaybe<AddressWhereInput>;
};


export type MutationDeleteManyCategoryArgs = {
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationDeleteManyCityArgs = {
  where?: InputMaybe<CityWhereInput>;
};


export type MutationDeleteManyCountryArgs = {
  where?: InputMaybe<CountryWhereInput>;
};


export type MutationDeleteManyCustomerArgs = {
  where?: InputMaybe<CustomerWhereInput>;
};


export type MutationDeleteManyFilmArgs = {
  where?: InputMaybe<FilmWhereInput>;
};


export type MutationDeleteManyFilm_ActorArgs = {
  where?: InputMaybe<Film_ActorWhereInput>;
};


export type MutationDeleteManyFilm_CategoryArgs = {
  where?: InputMaybe<Film_CategoryWhereInput>;
};


export type MutationDeleteManyFilm_TextArgs = {
  where?: InputMaybe<Film_TextWhereInput>;
};


export type MutationDeleteManyInventoryArgs = {
  where?: InputMaybe<InventoryWhereInput>;
};


export type MutationDeleteManyLanguageArgs = {
  where?: InputMaybe<LanguageWhereInput>;
};


export type MutationDeleteManyPaymentArgs = {
  where?: InputMaybe<PaymentWhereInput>;
};


export type MutationDeleteManyRentalArgs = {
  where?: InputMaybe<RentalWhereInput>;
};


export type MutationDeleteManyStaffArgs = {
  where?: InputMaybe<StaffWhereInput>;
};


export type MutationDeleteManyStoreArgs = {
  where?: InputMaybe<StoreWhereInput>;
};


export type MutationDeleteOneActorArgs = {
  where: ActorWhereUniqueInput;
};


export type MutationDeleteOneAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type MutationDeleteOneCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteOneCityArgs = {
  where: CityWhereUniqueInput;
};


export type MutationDeleteOneCountryArgs = {
  where: CountryWhereUniqueInput;
};


export type MutationDeleteOneCustomerArgs = {
  where: CustomerWhereUniqueInput;
};


export type MutationDeleteOneFilmArgs = {
  where: FilmWhereUniqueInput;
};


export type MutationDeleteOneFilm_ActorArgs = {
  where: Film_ActorWhereUniqueInput;
};


export type MutationDeleteOneFilm_CategoryArgs = {
  where: Film_CategoryWhereUniqueInput;
};


export type MutationDeleteOneFilm_TextArgs = {
  where: Film_TextWhereUniqueInput;
};


export type MutationDeleteOneInventoryArgs = {
  where: InventoryWhereUniqueInput;
};


export type MutationDeleteOneLanguageArgs = {
  where: LanguageWhereUniqueInput;
};


export type MutationDeleteOnePaymentArgs = {
  where: PaymentWhereUniqueInput;
};


export type MutationDeleteOneRentalArgs = {
  where: RentalWhereUniqueInput;
};


export type MutationDeleteOneStaffArgs = {
  where: StaffWhereUniqueInput;
};


export type MutationDeleteOneStoreArgs = {
  where: StoreWhereUniqueInput;
};


export type MutationUpdateManyActorArgs = {
  data: ActorUpdateManyMutationInput;
  where?: InputMaybe<ActorWhereInput>;
};


export type MutationUpdateManyAddressArgs = {
  data: AddressUpdateManyMutationInput;
  where?: InputMaybe<AddressWhereInput>;
};


export type MutationUpdateManyCategoryArgs = {
  data: CategoryUpdateManyMutationInput;
  where?: InputMaybe<CategoryWhereInput>;
};


export type MutationUpdateManyCityArgs = {
  data: CityUpdateManyMutationInput;
  where?: InputMaybe<CityWhereInput>;
};


export type MutationUpdateManyCountryArgs = {
  data: CountryUpdateManyMutationInput;
  where?: InputMaybe<CountryWhereInput>;
};


export type MutationUpdateManyCustomerArgs = {
  data: CustomerUpdateManyMutationInput;
  where?: InputMaybe<CustomerWhereInput>;
};


export type MutationUpdateManyFilmArgs = {
  data: FilmUpdateManyMutationInput;
  where?: InputMaybe<FilmWhereInput>;
};


export type MutationUpdateManyFilm_ActorArgs = {
  data: Film_ActorUpdateManyMutationInput;
  where?: InputMaybe<Film_ActorWhereInput>;
};


export type MutationUpdateManyFilm_CategoryArgs = {
  data: Film_CategoryUpdateManyMutationInput;
  where?: InputMaybe<Film_CategoryWhereInput>;
};


export type MutationUpdateManyFilm_TextArgs = {
  data: Film_TextUpdateManyMutationInput;
  where?: InputMaybe<Film_TextWhereInput>;
};


export type MutationUpdateManyInventoryArgs = {
  data: InventoryUpdateManyMutationInput;
  where?: InputMaybe<InventoryWhereInput>;
};


export type MutationUpdateManyLanguageArgs = {
  data: LanguageUpdateManyMutationInput;
  where?: InputMaybe<LanguageWhereInput>;
};


export type MutationUpdateManyPaymentArgs = {
  data: PaymentUpdateManyMutationInput;
  where?: InputMaybe<PaymentWhereInput>;
};


export type MutationUpdateManyRentalArgs = {
  data: RentalUpdateManyMutationInput;
  where?: InputMaybe<RentalWhereInput>;
};


export type MutationUpdateManyStaffArgs = {
  data: StaffUpdateManyMutationInput;
  where?: InputMaybe<StaffWhereInput>;
};


export type MutationUpdateManyStoreArgs = {
  data: StoreUpdateManyMutationInput;
  where?: InputMaybe<StoreWhereInput>;
};


export type MutationUpdateOneActorArgs = {
  data: ActorUpdateInput;
  where: ActorWhereUniqueInput;
};


export type MutationUpdateOneAddressArgs = {
  data: AddressUpdateInput;
  where: AddressWhereUniqueInput;
};


export type MutationUpdateOneCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateOneCityArgs = {
  data: CityUpdateInput;
  where: CityWhereUniqueInput;
};


export type MutationUpdateOneCountryArgs = {
  data: CountryUpdateInput;
  where: CountryWhereUniqueInput;
};


export type MutationUpdateOneCustomerArgs = {
  data: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
};


export type MutationUpdateOneFilmArgs = {
  data: FilmUpdateInput;
  where: FilmWhereUniqueInput;
};


export type MutationUpdateOneFilm_ActorArgs = {
  data: Film_ActorUpdateInput;
  where: Film_ActorWhereUniqueInput;
};


export type MutationUpdateOneFilm_CategoryArgs = {
  data: Film_CategoryUpdateInput;
  where: Film_CategoryWhereUniqueInput;
};


export type MutationUpdateOneFilm_TextArgs = {
  data: Film_TextUpdateInput;
  where: Film_TextWhereUniqueInput;
};


export type MutationUpdateOneInventoryArgs = {
  data: InventoryUpdateInput;
  where: InventoryWhereUniqueInput;
};


export type MutationUpdateOneLanguageArgs = {
  data: LanguageUpdateInput;
  where: LanguageWhereUniqueInput;
};


export type MutationUpdateOnePaymentArgs = {
  data: PaymentUpdateInput;
  where: PaymentWhereUniqueInput;
};


export type MutationUpdateOneRentalArgs = {
  data: RentalUpdateInput;
  where: RentalWhereUniqueInput;
};


export type MutationUpdateOneStaffArgs = {
  data: StaffUpdateInput;
  where: StaffWhereUniqueInput;
};


export type MutationUpdateOneStoreArgs = {
  data: StoreUpdateInput;
  where: StoreWhereUniqueInput;
};


export type MutationUpsertOneActorArgs = {
  create: ActorCreateInput;
  update: ActorUpdateInput;
  where: ActorWhereUniqueInput;
};


export type MutationUpsertOneCategoryArgs = {
  create: CategoryCreateInput;
  update: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpsertOneCityArgs = {
  create: CityCreateInput;
  update: CityUpdateInput;
  where: CityWhereUniqueInput;
};


export type MutationUpsertOneCountryArgs = {
  create: CountryCreateInput;
  update: CountryUpdateInput;
  where: CountryWhereUniqueInput;
};


export type MutationUpsertOneCustomerArgs = {
  create: CustomerCreateInput;
  update: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
};


export type MutationUpsertOneFilmArgs = {
  create: FilmCreateInput;
  update: FilmUpdateInput;
  where: FilmWhereUniqueInput;
};


export type MutationUpsertOneFilm_ActorArgs = {
  create: Film_ActorCreateInput;
  update: Film_ActorUpdateInput;
  where: Film_ActorWhereUniqueInput;
};


export type MutationUpsertOneFilm_CategoryArgs = {
  create: Film_CategoryCreateInput;
  update: Film_CategoryUpdateInput;
  where: Film_CategoryWhereUniqueInput;
};


export type MutationUpsertOneFilm_TextArgs = {
  create: Film_TextCreateInput;
  update: Film_TextUpdateInput;
  where: Film_TextWhereUniqueInput;
};


export type MutationUpsertOneInventoryArgs = {
  create: InventoryCreateInput;
  update: InventoryUpdateInput;
  where: InventoryWhereUniqueInput;
};


export type MutationUpsertOneLanguageArgs = {
  create: LanguageCreateInput;
  update: LanguageUpdateInput;
  where: LanguageWhereUniqueInput;
};


export type MutationUpsertOnePaymentArgs = {
  create: PaymentCreateInput;
  update: PaymentUpdateInput;
  where: PaymentWhereUniqueInput;
};


export type MutationUpsertOneRentalArgs = {
  create: RentalCreateInput;
  update: RentalUpdateInput;
  where: RentalWhereUniqueInput;
};


export type MutationUpsertOneStaffArgs = {
  create: StaffCreateInput;
  update: StaffUpdateInput;
  where: StaffWhereUniqueInput;
};


export type MutationUpsertOneStoreArgs = {
  create: StoreCreateInput;
  update: StoreUpdateInput;
  where: StoreWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedBytesNullableFilter = {
  equals?: InputMaybe<Scalars['Byte']['input']>;
  in?: InputMaybe<Array<Scalars['Byte']['input']>>;
  not?: InputMaybe<NestedBytesNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Byte']['input']>>;
};

export type NestedBytesNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBytesNullableFilter>;
  _min?: InputMaybe<NestedBytesNullableFilter>;
  equals?: InputMaybe<Scalars['Byte']['input']>;
  in?: InputMaybe<Array<Scalars['Byte']['input']>>;
  not?: InputMaybe<NestedBytesNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Byte']['input']>>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDecimalFilter = {
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type NestedDecimalWithAggregatesFilter = {
  _avg?: InputMaybe<NestedDecimalFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDecimalFilter>;
  _min?: InputMaybe<NestedDecimalFilter>;
  _sum?: InputMaybe<NestedDecimalFilter>;
  equals?: InputMaybe<Scalars['Decimal']['input']>;
  gt?: InputMaybe<Scalars['Decimal']['input']>;
  gte?: InputMaybe<Scalars['Decimal']['input']>;
  in?: InputMaybe<Array<Scalars['Decimal']['input']>>;
  lt?: InputMaybe<Scalars['Decimal']['input']>;
  lte?: InputMaybe<Scalars['Decimal']['input']>;
  not?: InputMaybe<NestedDecimalWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Decimal']['input']>>;
};

export type NestedEnumfilm_RatingNullableFilter = {
  equals?: InputMaybe<Film_Rating>;
  in?: InputMaybe<Array<Film_Rating>>;
  not?: InputMaybe<NestedEnumfilm_RatingNullableFilter>;
  notIn?: InputMaybe<Array<Film_Rating>>;
};

export type NestedEnumfilm_RatingNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedEnumfilm_RatingNullableFilter>;
  _min?: InputMaybe<NestedEnumfilm_RatingNullableFilter>;
  equals?: InputMaybe<Film_Rating>;
  in?: InputMaybe<Array<Film_Rating>>;
  not?: InputMaybe<NestedEnumfilm_RatingNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Film_Rating>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableBytesFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Byte']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type NullableEnumfilm_RatingFieldUpdateOperationsInput = {
  set?: InputMaybe<Film_Rating>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Decimal']['output'];
  customer: Customer;
  customer_id: Scalars['Int']['output'];
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  payment_date: Scalars['DateTimeISO']['output'];
  payment_id: Scalars['Int']['output'];
  rental?: Maybe<Rental>;
  rental_id?: Maybe<Scalars['Int']['output']>;
  staff: Staff;
  staff_id: Scalars['Int']['output'];
};


export type PaymentRentalArgs = {
  where?: InputMaybe<RentalWhereInput>;
};

export type PaymentAvgAggregate = {
  __typename?: 'PaymentAvgAggregate';
  amount?: Maybe<Scalars['Decimal']['output']>;
  customer_id?: Maybe<Scalars['Float']['output']>;
  payment_id?: Maybe<Scalars['Float']['output']>;
  rental_id?: Maybe<Scalars['Float']['output']>;
  staff_id?: Maybe<Scalars['Float']['output']>;
};

export type PaymentAvgOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  customer_id?: InputMaybe<SortOrder>;
  payment_id?: InputMaybe<SortOrder>;
  rental_id?: InputMaybe<SortOrder>;
  staff_id?: InputMaybe<SortOrder>;
};

export type PaymentCountAggregate = {
  __typename?: 'PaymentCountAggregate';
  _all: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  customer_id: Scalars['Int']['output'];
  last_update: Scalars['Int']['output'];
  payment_date: Scalars['Int']['output'];
  payment_id: Scalars['Int']['output'];
  rental_id: Scalars['Int']['output'];
  staff_id: Scalars['Int']['output'];
};

export type PaymentCountOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  customer_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  payment_date?: InputMaybe<SortOrder>;
  payment_id?: InputMaybe<SortOrder>;
  rental_id?: InputMaybe<SortOrder>;
  staff_id?: InputMaybe<SortOrder>;
};

export type PaymentCreateInput = {
  amount: Scalars['Decimal']['input'];
  customer: CustomerCreateNestedOneWithoutPaymentInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  payment_date: Scalars['DateTimeISO']['input'];
  rental?: InputMaybe<RentalCreateNestedOneWithoutPaymentInput>;
  staff: StaffCreateNestedOneWithoutPaymentInput;
};

export type PaymentCreateManyCustomerInput = {
  amount: Scalars['Decimal']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  payment_date: Scalars['DateTimeISO']['input'];
  payment_id?: InputMaybe<Scalars['Int']['input']>;
  rental_id?: InputMaybe<Scalars['Int']['input']>;
  staff_id: Scalars['Int']['input'];
};

export type PaymentCreateManyCustomerInputEnvelope = {
  data: Array<PaymentCreateManyCustomerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PaymentCreateManyInput = {
  amount: Scalars['Decimal']['input'];
  customer_id: Scalars['Int']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  payment_date: Scalars['DateTimeISO']['input'];
  payment_id?: InputMaybe<Scalars['Int']['input']>;
  rental_id?: InputMaybe<Scalars['Int']['input']>;
  staff_id: Scalars['Int']['input'];
};

export type PaymentCreateManyRentalInput = {
  amount: Scalars['Decimal']['input'];
  customer_id: Scalars['Int']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  payment_date: Scalars['DateTimeISO']['input'];
  payment_id?: InputMaybe<Scalars['Int']['input']>;
  staff_id: Scalars['Int']['input'];
};

export type PaymentCreateManyRentalInputEnvelope = {
  data: Array<PaymentCreateManyRentalInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PaymentCreateManyStaffInput = {
  amount: Scalars['Decimal']['input'];
  customer_id: Scalars['Int']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  payment_date: Scalars['DateTimeISO']['input'];
  payment_id?: InputMaybe<Scalars['Int']['input']>;
  rental_id?: InputMaybe<Scalars['Int']['input']>;
};

export type PaymentCreateManyStaffInputEnvelope = {
  data: Array<PaymentCreateManyStaffInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PaymentCreateNestedManyWithoutCustomerInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaymentCreateOrConnectWithoutCustomerInput>>;
  create?: InputMaybe<Array<PaymentCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<PaymentCreateManyCustomerInputEnvelope>;
};

export type PaymentCreateNestedManyWithoutRentalInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaymentCreateOrConnectWithoutRentalInput>>;
  create?: InputMaybe<Array<PaymentCreateWithoutRentalInput>>;
  createMany?: InputMaybe<PaymentCreateManyRentalInputEnvelope>;
};

export type PaymentCreateNestedManyWithoutStaffInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaymentCreateOrConnectWithoutStaffInput>>;
  create?: InputMaybe<Array<PaymentCreateWithoutStaffInput>>;
  createMany?: InputMaybe<PaymentCreateManyStaffInputEnvelope>;
};

export type PaymentCreateOrConnectWithoutCustomerInput = {
  create: PaymentCreateWithoutCustomerInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentCreateOrConnectWithoutRentalInput = {
  create: PaymentCreateWithoutRentalInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentCreateOrConnectWithoutStaffInput = {
  create: PaymentCreateWithoutStaffInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentCreateWithoutCustomerInput = {
  amount: Scalars['Decimal']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  payment_date: Scalars['DateTimeISO']['input'];
  rental?: InputMaybe<RentalCreateNestedOneWithoutPaymentInput>;
  staff: StaffCreateNestedOneWithoutPaymentInput;
};

export type PaymentCreateWithoutRentalInput = {
  amount: Scalars['Decimal']['input'];
  customer: CustomerCreateNestedOneWithoutPaymentInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  payment_date: Scalars['DateTimeISO']['input'];
  staff: StaffCreateNestedOneWithoutPaymentInput;
};

export type PaymentCreateWithoutStaffInput = {
  amount: Scalars['Decimal']['input'];
  customer: CustomerCreateNestedOneWithoutPaymentInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  payment_date: Scalars['DateTimeISO']['input'];
  rental?: InputMaybe<RentalCreateNestedOneWithoutPaymentInput>;
};

export type PaymentGroupBy = {
  __typename?: 'PaymentGroupBy';
  _avg?: Maybe<PaymentAvgAggregate>;
  _count?: Maybe<PaymentCountAggregate>;
  _max?: Maybe<PaymentMaxAggregate>;
  _min?: Maybe<PaymentMinAggregate>;
  _sum?: Maybe<PaymentSumAggregate>;
  amount: Scalars['Decimal']['output'];
  customer_id: Scalars['Int']['output'];
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  payment_date: Scalars['DateTimeISO']['output'];
  payment_id: Scalars['Int']['output'];
  rental_id?: Maybe<Scalars['Int']['output']>;
  staff_id: Scalars['Int']['output'];
};

export type PaymentListRelationFilter = {
  every?: InputMaybe<PaymentWhereInput>;
  none?: InputMaybe<PaymentWhereInput>;
  some?: InputMaybe<PaymentWhereInput>;
};

export type PaymentMaxAggregate = {
  __typename?: 'PaymentMaxAggregate';
  amount?: Maybe<Scalars['Decimal']['output']>;
  customer_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  payment_date?: Maybe<Scalars['DateTimeISO']['output']>;
  payment_id?: Maybe<Scalars['Int']['output']>;
  rental_id?: Maybe<Scalars['Int']['output']>;
  staff_id?: Maybe<Scalars['Int']['output']>;
};

export type PaymentMaxOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  customer_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  payment_date?: InputMaybe<SortOrder>;
  payment_id?: InputMaybe<SortOrder>;
  rental_id?: InputMaybe<SortOrder>;
  staff_id?: InputMaybe<SortOrder>;
};

export type PaymentMinAggregate = {
  __typename?: 'PaymentMinAggregate';
  amount?: Maybe<Scalars['Decimal']['output']>;
  customer_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  payment_date?: Maybe<Scalars['DateTimeISO']['output']>;
  payment_id?: Maybe<Scalars['Int']['output']>;
  rental_id?: Maybe<Scalars['Int']['output']>;
  staff_id?: Maybe<Scalars['Int']['output']>;
};

export type PaymentMinOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  customer_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  payment_date?: InputMaybe<SortOrder>;
  payment_id?: InputMaybe<SortOrder>;
  rental_id?: InputMaybe<SortOrder>;
  staff_id?: InputMaybe<SortOrder>;
};

export type PaymentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PaymentOrderByWithAggregationInput = {
  _avg?: InputMaybe<PaymentAvgOrderByAggregateInput>;
  _count?: InputMaybe<PaymentCountOrderByAggregateInput>;
  _max?: InputMaybe<PaymentMaxOrderByAggregateInput>;
  _min?: InputMaybe<PaymentMinOrderByAggregateInput>;
  _sum?: InputMaybe<PaymentSumOrderByAggregateInput>;
  amount?: InputMaybe<SortOrder>;
  customer_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrderInput>;
  payment_date?: InputMaybe<SortOrder>;
  payment_id?: InputMaybe<SortOrder>;
  rental_id?: InputMaybe<SortOrderInput>;
  staff_id?: InputMaybe<SortOrder>;
};

export type PaymentOrderByWithRelationInput = {
  amount?: InputMaybe<SortOrder>;
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customer_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrderInput>;
  payment_date?: InputMaybe<SortOrder>;
  payment_id?: InputMaybe<SortOrder>;
  rental?: InputMaybe<RentalOrderByWithRelationInput>;
  rental_id?: InputMaybe<SortOrderInput>;
  staff?: InputMaybe<StaffOrderByWithRelationInput>;
  staff_id?: InputMaybe<SortOrder>;
};

export enum PaymentScalarFieldEnum {
  Amount = 'amount',
  CustomerId = 'customer_id',
  LastUpdate = 'last_update',
  PaymentDate = 'payment_date',
  PaymentId = 'payment_id',
  RentalId = 'rental_id',
  StaffId = 'staff_id'
}

export type PaymentScalarWhereInput = {
  AND?: InputMaybe<Array<PaymentScalarWhereInput>>;
  NOT?: InputMaybe<Array<PaymentScalarWhereInput>>;
  OR?: InputMaybe<Array<PaymentScalarWhereInput>>;
  amount?: InputMaybe<DecimalFilter>;
  customer_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeNullableFilter>;
  payment_date?: InputMaybe<DateTimeFilter>;
  payment_id?: InputMaybe<IntFilter>;
  rental_id?: InputMaybe<IntNullableFilter>;
  staff_id?: InputMaybe<IntFilter>;
};

export type PaymentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PaymentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PaymentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PaymentScalarWhereWithAggregatesInput>>;
  amount?: InputMaybe<DecimalWithAggregatesFilter>;
  customer_id?: InputMaybe<IntWithAggregatesFilter>;
  last_update?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  payment_date?: InputMaybe<DateTimeWithAggregatesFilter>;
  payment_id?: InputMaybe<IntWithAggregatesFilter>;
  rental_id?: InputMaybe<IntNullableWithAggregatesFilter>;
  staff_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type PaymentSumAggregate = {
  __typename?: 'PaymentSumAggregate';
  amount?: Maybe<Scalars['Decimal']['output']>;
  customer_id?: Maybe<Scalars['Int']['output']>;
  payment_id?: Maybe<Scalars['Int']['output']>;
  rental_id?: Maybe<Scalars['Int']['output']>;
  staff_id?: Maybe<Scalars['Int']['output']>;
};

export type PaymentSumOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  customer_id?: InputMaybe<SortOrder>;
  payment_id?: InputMaybe<SortOrder>;
  rental_id?: InputMaybe<SortOrder>;
  staff_id?: InputMaybe<SortOrder>;
};

export type PaymentUpdateInput = {
  amount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  customer?: InputMaybe<CustomerUpdateOneRequiredWithoutPaymentNestedInput>;
  last_update?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  payment_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  rental?: InputMaybe<RentalUpdateOneWithoutPaymentNestedInput>;
  staff?: InputMaybe<StaffUpdateOneRequiredWithoutPaymentNestedInput>;
};

export type PaymentUpdateManyMutationInput = {
  amount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  last_update?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  payment_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PaymentUpdateManyWithWhereWithoutCustomerInput = {
  data: PaymentUpdateManyMutationInput;
  where: PaymentScalarWhereInput;
};

export type PaymentUpdateManyWithWhereWithoutRentalInput = {
  data: PaymentUpdateManyMutationInput;
  where: PaymentScalarWhereInput;
};

export type PaymentUpdateManyWithWhereWithoutStaffInput = {
  data: PaymentUpdateManyMutationInput;
  where: PaymentScalarWhereInput;
};

export type PaymentUpdateManyWithoutCustomerNestedInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaymentCreateOrConnectWithoutCustomerInput>>;
  create?: InputMaybe<Array<PaymentCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<PaymentCreateManyCustomerInputEnvelope>;
  delete?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PaymentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  set?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  update?: InputMaybe<Array<PaymentUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: InputMaybe<Array<PaymentUpdateManyWithWhereWithoutCustomerInput>>;
  upsert?: InputMaybe<Array<PaymentUpsertWithWhereUniqueWithoutCustomerInput>>;
};

export type PaymentUpdateManyWithoutRentalNestedInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaymentCreateOrConnectWithoutRentalInput>>;
  create?: InputMaybe<Array<PaymentCreateWithoutRentalInput>>;
  createMany?: InputMaybe<PaymentCreateManyRentalInputEnvelope>;
  delete?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PaymentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  set?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  update?: InputMaybe<Array<PaymentUpdateWithWhereUniqueWithoutRentalInput>>;
  updateMany?: InputMaybe<Array<PaymentUpdateManyWithWhereWithoutRentalInput>>;
  upsert?: InputMaybe<Array<PaymentUpsertWithWhereUniqueWithoutRentalInput>>;
};

export type PaymentUpdateManyWithoutStaffNestedInput = {
  connect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PaymentCreateOrConnectWithoutStaffInput>>;
  create?: InputMaybe<Array<PaymentCreateWithoutStaffInput>>;
  createMany?: InputMaybe<PaymentCreateManyStaffInputEnvelope>;
  delete?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PaymentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  set?: InputMaybe<Array<PaymentWhereUniqueInput>>;
  update?: InputMaybe<Array<PaymentUpdateWithWhereUniqueWithoutStaffInput>>;
  updateMany?: InputMaybe<Array<PaymentUpdateManyWithWhereWithoutStaffInput>>;
  upsert?: InputMaybe<Array<PaymentUpsertWithWhereUniqueWithoutStaffInput>>;
};

export type PaymentUpdateWithWhereUniqueWithoutCustomerInput = {
  data: PaymentUpdateWithoutCustomerInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentUpdateWithWhereUniqueWithoutRentalInput = {
  data: PaymentUpdateWithoutRentalInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentUpdateWithWhereUniqueWithoutStaffInput = {
  data: PaymentUpdateWithoutStaffInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentUpdateWithoutCustomerInput = {
  amount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  last_update?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  payment_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  rental?: InputMaybe<RentalUpdateOneWithoutPaymentNestedInput>;
  staff?: InputMaybe<StaffUpdateOneRequiredWithoutPaymentNestedInput>;
};

export type PaymentUpdateWithoutRentalInput = {
  amount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  customer?: InputMaybe<CustomerUpdateOneRequiredWithoutPaymentNestedInput>;
  last_update?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  payment_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneRequiredWithoutPaymentNestedInput>;
};

export type PaymentUpdateWithoutStaffInput = {
  amount?: InputMaybe<DecimalFieldUpdateOperationsInput>;
  customer?: InputMaybe<CustomerUpdateOneRequiredWithoutPaymentNestedInput>;
  last_update?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  payment_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  rental?: InputMaybe<RentalUpdateOneWithoutPaymentNestedInput>;
};

export type PaymentUpsertWithWhereUniqueWithoutCustomerInput = {
  create: PaymentCreateWithoutCustomerInput;
  update: PaymentUpdateWithoutCustomerInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentUpsertWithWhereUniqueWithoutRentalInput = {
  create: PaymentCreateWithoutRentalInput;
  update: PaymentUpdateWithoutRentalInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentUpsertWithWhereUniqueWithoutStaffInput = {
  create: PaymentCreateWithoutStaffInput;
  update: PaymentUpdateWithoutStaffInput;
  where: PaymentWhereUniqueInput;
};

export type PaymentWhereInput = {
  AND?: InputMaybe<Array<PaymentWhereInput>>;
  NOT?: InputMaybe<Array<PaymentWhereInput>>;
  OR?: InputMaybe<Array<PaymentWhereInput>>;
  amount?: InputMaybe<DecimalFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customer_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeNullableFilter>;
  payment_date?: InputMaybe<DateTimeFilter>;
  payment_id?: InputMaybe<IntFilter>;
  rental?: InputMaybe<RentalNullableRelationFilter>;
  rental_id?: InputMaybe<IntNullableFilter>;
  staff?: InputMaybe<StaffRelationFilter>;
  staff_id?: InputMaybe<IntFilter>;
};

export type PaymentWhereUniqueInput = {
  AND?: InputMaybe<Array<PaymentWhereInput>>;
  NOT?: InputMaybe<Array<PaymentWhereInput>>;
  OR?: InputMaybe<Array<PaymentWhereInput>>;
  amount?: InputMaybe<DecimalFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customer_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeNullableFilter>;
  payment_date?: InputMaybe<DateTimeFilter>;
  payment_id?: InputMaybe<Scalars['Int']['input']>;
  rental?: InputMaybe<RentalNullableRelationFilter>;
  rental_id?: InputMaybe<IntNullableFilter>;
  staff?: InputMaybe<StaffRelationFilter>;
  staff_id?: InputMaybe<IntFilter>;
};

export type Query = {
  __typename?: 'Query';
  actor?: Maybe<Actor>;
  actors: Array<Actor>;
  address?: Maybe<Address>;
  addresses: Array<Address>;
  aggregateActor: AggregateActor;
  aggregateAddress: AggregateAddress;
  aggregateCategory: AggregateCategory;
  aggregateCity: AggregateCity;
  aggregateCountry: AggregateCountry;
  aggregateCustomer: AggregateCustomer;
  aggregateFilm: AggregateFilm;
  aggregateFilm_actor: AggregateFilm_Actor;
  aggregateFilm_category: AggregateFilm_Category;
  aggregateFilm_text: AggregateFilm_Text;
  aggregateInventory: AggregateInventory;
  aggregateLanguage: AggregateLanguage;
  aggregatePayment: AggregatePayment;
  aggregateRental: AggregateRental;
  aggregateStaff: AggregateStaff;
  aggregateStore: AggregateStore;
  categories: Array<Category>;
  category?: Maybe<Category>;
  cities: Array<City>;
  city?: Maybe<City>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  customer?: Maybe<Customer>;
  customers: Array<Customer>;
  film?: Maybe<Film>;
  film_actor?: Maybe<Film_Actor>;
  film_actors: Array<Film_Actor>;
  film_categories: Array<Film_Category>;
  film_category?: Maybe<Film_Category>;
  film_text?: Maybe<Film_Text>;
  film_texts: Array<Film_Text>;
  films: Array<Film>;
  findFirstActor?: Maybe<Actor>;
  findFirstActorOrThrow?: Maybe<Actor>;
  findFirstAddress?: Maybe<Address>;
  findFirstAddressOrThrow?: Maybe<Address>;
  findFirstCategory?: Maybe<Category>;
  findFirstCategoryOrThrow?: Maybe<Category>;
  findFirstCity?: Maybe<City>;
  findFirstCityOrThrow?: Maybe<City>;
  findFirstCountry?: Maybe<Country>;
  findFirstCountryOrThrow?: Maybe<Country>;
  findFirstCustomer?: Maybe<Customer>;
  findFirstCustomerOrThrow?: Maybe<Customer>;
  findFirstFilm?: Maybe<Film>;
  findFirstFilmOrThrow?: Maybe<Film>;
  findFirstFilm_actor?: Maybe<Film_Actor>;
  findFirstFilm_actorOrThrow?: Maybe<Film_Actor>;
  findFirstFilm_category?: Maybe<Film_Category>;
  findFirstFilm_categoryOrThrow?: Maybe<Film_Category>;
  findFirstFilm_text?: Maybe<Film_Text>;
  findFirstFilm_textOrThrow?: Maybe<Film_Text>;
  findFirstInventory?: Maybe<Inventory>;
  findFirstInventoryOrThrow?: Maybe<Inventory>;
  findFirstLanguage?: Maybe<Language>;
  findFirstLanguageOrThrow?: Maybe<Language>;
  findFirstPayment?: Maybe<Payment>;
  findFirstPaymentOrThrow?: Maybe<Payment>;
  findFirstRental?: Maybe<Rental>;
  findFirstRentalOrThrow?: Maybe<Rental>;
  findFirstStaff?: Maybe<Staff>;
  findFirstStaffOrThrow?: Maybe<Staff>;
  findFirstStore?: Maybe<Store>;
  findFirstStoreOrThrow?: Maybe<Store>;
  findManyStaff: Array<Staff>;
  findUniqueStaff?: Maybe<Staff>;
  findUniqueStaffOrThrow?: Maybe<Staff>;
  getActor?: Maybe<Actor>;
  getAddress?: Maybe<Address>;
  getCategory?: Maybe<Category>;
  getCity?: Maybe<City>;
  getCountry?: Maybe<Country>;
  getCustomer?: Maybe<Customer>;
  getFilm?: Maybe<Film>;
  getFilm_actor?: Maybe<Film_Actor>;
  getFilm_category?: Maybe<Film_Category>;
  getFilm_text?: Maybe<Film_Text>;
  getInventory?: Maybe<Inventory>;
  getLanguage?: Maybe<Language>;
  getPayment?: Maybe<Payment>;
  getRental?: Maybe<Rental>;
  getStore?: Maybe<Store>;
  groupByActor: Array<ActorGroupBy>;
  groupByAddress: Array<AddressGroupBy>;
  groupByCategory: Array<CategoryGroupBy>;
  groupByCity: Array<CityGroupBy>;
  groupByCountry: Array<CountryGroupBy>;
  groupByCustomer: Array<CustomerGroupBy>;
  groupByFilm: Array<FilmGroupBy>;
  groupByFilm_actor: Array<Film_ActorGroupBy>;
  groupByFilm_category: Array<Film_CategoryGroupBy>;
  groupByFilm_text: Array<Film_TextGroupBy>;
  groupByInventory: Array<InventoryGroupBy>;
  groupByLanguage: Array<LanguageGroupBy>;
  groupByPayment: Array<PaymentGroupBy>;
  groupByRental: Array<RentalGroupBy>;
  groupByStaff: Array<StaffGroupBy>;
  groupByStore: Array<StoreGroupBy>;
  inventories: Array<Inventory>;
  inventory?: Maybe<Inventory>;
  language?: Maybe<Language>;
  languages: Array<Language>;
  payment?: Maybe<Payment>;
  payments: Array<Payment>;
  rental?: Maybe<Rental>;
  rentals: Array<Rental>;
  store?: Maybe<Store>;
  stores: Array<Store>;
};


export type QueryActorArgs = {
  where: ActorWhereUniqueInput;
};


export type QueryActorsArgs = {
  cursor?: InputMaybe<ActorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActorWhereInput>;
};


export type QueryAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type QueryAddressesArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddressWhereInput>;
};


export type QueryAggregateActorArgs = {
  cursor?: InputMaybe<ActorWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ActorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActorWhereInput>;
};


export type QueryAggregateAddressArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddressWhereInput>;
};


export type QueryAggregateCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryAggregateCityArgs = {
  cursor?: InputMaybe<CityWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CityWhereInput>;
};


export type QueryAggregateCountryArgs = {
  cursor?: InputMaybe<CountryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CountryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CountryWhereInput>;
};


export type QueryAggregateCustomerArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};


export type QueryAggregateFilmArgs = {
  cursor?: InputMaybe<FilmWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FilmOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FilmWhereInput>;
};


export type QueryAggregateFilm_ActorArgs = {
  cursor?: InputMaybe<Film_ActorWhereUniqueInput>;
  orderBy?: InputMaybe<Array<Film_ActorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_ActorWhereInput>;
};


export type QueryAggregateFilm_CategoryArgs = {
  cursor?: InputMaybe<Film_CategoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<Film_CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_CategoryWhereInput>;
};


export type QueryAggregateFilm_TextArgs = {
  cursor?: InputMaybe<Film_TextWhereUniqueInput>;
  orderBy?: InputMaybe<Array<Film_TextOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_TextWhereInput>;
};


export type QueryAggregateInventoryArgs = {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InventoryWhereInput>;
};


export type QueryAggregateLanguageArgs = {
  cursor?: InputMaybe<LanguageWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LanguageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LanguageWhereInput>;
};


export type QueryAggregatePaymentArgs = {
  cursor?: InputMaybe<PaymentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PaymentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaymentWhereInput>;
};


export type QueryAggregateRentalArgs = {
  cursor?: InputMaybe<RentalWhereUniqueInput>;
  orderBy?: InputMaybe<Array<RentalOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RentalWhereInput>;
};


export type QueryAggregateStaffArgs = {
  cursor?: InputMaybe<StaffWhereUniqueInput>;
  orderBy?: InputMaybe<Array<StaffOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StaffWhereInput>;
};


export type QueryAggregateStoreArgs = {
  cursor?: InputMaybe<StoreWhereUniqueInput>;
  orderBy?: InputMaybe<Array<StoreOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StoreWhereInput>;
};


export type QueryCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryCitiesArgs = {
  cursor?: InputMaybe<CityWhereUniqueInput>;
  distinct?: InputMaybe<Array<CityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CityWhereInput>;
};


export type QueryCityArgs = {
  where: CityWhereUniqueInput;
};


export type QueryCountriesArgs = {
  cursor?: InputMaybe<CountryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CountryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CountryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CountryWhereInput>;
};


export type QueryCountryArgs = {
  where: CountryWhereUniqueInput;
};


export type QueryCustomerArgs = {
  where: CustomerWhereUniqueInput;
};


export type QueryCustomersArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};


export type QueryFilmArgs = {
  where: FilmWhereUniqueInput;
};


export type QueryFilm_ActorArgs = {
  where: Film_ActorWhereUniqueInput;
};


export type QueryFilm_ActorsArgs = {
  cursor?: InputMaybe<Film_ActorWhereUniqueInput>;
  distinct?: InputMaybe<Array<Film_ActorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Film_ActorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_ActorWhereInput>;
};


export type QueryFilm_CategoriesArgs = {
  cursor?: InputMaybe<Film_CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<Film_CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Film_CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_CategoryWhereInput>;
};


export type QueryFilm_CategoryArgs = {
  where: Film_CategoryWhereUniqueInput;
};


export type QueryFilm_TextArgs = {
  where: Film_TextWhereUniqueInput;
};


export type QueryFilm_TextsArgs = {
  cursor?: InputMaybe<Film_TextWhereUniqueInput>;
  distinct?: InputMaybe<Array<Film_TextScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Film_TextOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_TextWhereInput>;
};


export type QueryFilmsArgs = {
  cursor?: InputMaybe<FilmWhereUniqueInput>;
  distinct?: InputMaybe<Array<FilmScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FilmOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FilmWhereInput>;
};


export type QueryFindFirstActorArgs = {
  cursor?: InputMaybe<ActorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActorWhereInput>;
};


export type QueryFindFirstActorOrThrowArgs = {
  cursor?: InputMaybe<ActorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActorWhereInput>;
};


export type QueryFindFirstAddressArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddressWhereInput>;
};


export type QueryFindFirstAddressOrThrowArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddressWhereInput>;
};


export type QueryFindFirstCategoryArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryFindFirstCategoryOrThrowArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryFindFirstCityArgs = {
  cursor?: InputMaybe<CityWhereUniqueInput>;
  distinct?: InputMaybe<Array<CityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CityWhereInput>;
};


export type QueryFindFirstCityOrThrowArgs = {
  cursor?: InputMaybe<CityWhereUniqueInput>;
  distinct?: InputMaybe<Array<CityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CityOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CityWhereInput>;
};


export type QueryFindFirstCountryArgs = {
  cursor?: InputMaybe<CountryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CountryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CountryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CountryWhereInput>;
};


export type QueryFindFirstCountryOrThrowArgs = {
  cursor?: InputMaybe<CountryWhereUniqueInput>;
  distinct?: InputMaybe<Array<CountryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CountryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CountryWhereInput>;
};


export type QueryFindFirstCustomerArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};


export type QueryFindFirstCustomerOrThrowArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};


export type QueryFindFirstFilmArgs = {
  cursor?: InputMaybe<FilmWhereUniqueInput>;
  distinct?: InputMaybe<Array<FilmScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FilmOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FilmWhereInput>;
};


export type QueryFindFirstFilmOrThrowArgs = {
  cursor?: InputMaybe<FilmWhereUniqueInput>;
  distinct?: InputMaybe<Array<FilmScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FilmOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FilmWhereInput>;
};


export type QueryFindFirstFilm_ActorArgs = {
  cursor?: InputMaybe<Film_ActorWhereUniqueInput>;
  distinct?: InputMaybe<Array<Film_ActorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Film_ActorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_ActorWhereInput>;
};


export type QueryFindFirstFilm_ActorOrThrowArgs = {
  cursor?: InputMaybe<Film_ActorWhereUniqueInput>;
  distinct?: InputMaybe<Array<Film_ActorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Film_ActorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_ActorWhereInput>;
};


export type QueryFindFirstFilm_CategoryArgs = {
  cursor?: InputMaybe<Film_CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<Film_CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Film_CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_CategoryWhereInput>;
};


export type QueryFindFirstFilm_CategoryOrThrowArgs = {
  cursor?: InputMaybe<Film_CategoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<Film_CategoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Film_CategoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_CategoryWhereInput>;
};


export type QueryFindFirstFilm_TextArgs = {
  cursor?: InputMaybe<Film_TextWhereUniqueInput>;
  distinct?: InputMaybe<Array<Film_TextScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Film_TextOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_TextWhereInput>;
};


export type QueryFindFirstFilm_TextOrThrowArgs = {
  cursor?: InputMaybe<Film_TextWhereUniqueInput>;
  distinct?: InputMaybe<Array<Film_TextScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Film_TextOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_TextWhereInput>;
};


export type QueryFindFirstInventoryArgs = {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InventoryWhereInput>;
};


export type QueryFindFirstInventoryOrThrowArgs = {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InventoryWhereInput>;
};


export type QueryFindFirstLanguageArgs = {
  cursor?: InputMaybe<LanguageWhereUniqueInput>;
  distinct?: InputMaybe<Array<LanguageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LanguageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LanguageWhereInput>;
};


export type QueryFindFirstLanguageOrThrowArgs = {
  cursor?: InputMaybe<LanguageWhereUniqueInput>;
  distinct?: InputMaybe<Array<LanguageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LanguageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LanguageWhereInput>;
};


export type QueryFindFirstPaymentArgs = {
  cursor?: InputMaybe<PaymentWhereUniqueInput>;
  distinct?: InputMaybe<Array<PaymentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PaymentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaymentWhereInput>;
};


export type QueryFindFirstPaymentOrThrowArgs = {
  cursor?: InputMaybe<PaymentWhereUniqueInput>;
  distinct?: InputMaybe<Array<PaymentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PaymentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaymentWhereInput>;
};


export type QueryFindFirstRentalArgs = {
  cursor?: InputMaybe<RentalWhereUniqueInput>;
  distinct?: InputMaybe<Array<RentalScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RentalOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RentalWhereInput>;
};


export type QueryFindFirstRentalOrThrowArgs = {
  cursor?: InputMaybe<RentalWhereUniqueInput>;
  distinct?: InputMaybe<Array<RentalScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RentalOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RentalWhereInput>;
};


export type QueryFindFirstStaffArgs = {
  cursor?: InputMaybe<StaffWhereUniqueInput>;
  distinct?: InputMaybe<Array<StaffScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StaffOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StaffWhereInput>;
};


export type QueryFindFirstStaffOrThrowArgs = {
  cursor?: InputMaybe<StaffWhereUniqueInput>;
  distinct?: InputMaybe<Array<StaffScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StaffOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StaffWhereInput>;
};


export type QueryFindFirstStoreArgs = {
  cursor?: InputMaybe<StoreWhereUniqueInput>;
  distinct?: InputMaybe<Array<StoreScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StoreOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StoreWhereInput>;
};


export type QueryFindFirstStoreOrThrowArgs = {
  cursor?: InputMaybe<StoreWhereUniqueInput>;
  distinct?: InputMaybe<Array<StoreScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StoreOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StoreWhereInput>;
};


export type QueryFindManyStaffArgs = {
  cursor?: InputMaybe<StaffWhereUniqueInput>;
  distinct?: InputMaybe<Array<StaffScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StaffOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StaffWhereInput>;
};


export type QueryFindUniqueStaffArgs = {
  where: StaffWhereUniqueInput;
};


export type QueryFindUniqueStaffOrThrowArgs = {
  where: StaffWhereUniqueInput;
};


export type QueryGetActorArgs = {
  where: ActorWhereUniqueInput;
};


export type QueryGetAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type QueryGetCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryGetCityArgs = {
  where: CityWhereUniqueInput;
};


export type QueryGetCountryArgs = {
  where: CountryWhereUniqueInput;
};


export type QueryGetCustomerArgs = {
  where: CustomerWhereUniqueInput;
};


export type QueryGetFilmArgs = {
  where: FilmWhereUniqueInput;
};


export type QueryGetFilm_ActorArgs = {
  where: Film_ActorWhereUniqueInput;
};


export type QueryGetFilm_CategoryArgs = {
  where: Film_CategoryWhereUniqueInput;
};


export type QueryGetFilm_TextArgs = {
  where: Film_TextWhereUniqueInput;
};


export type QueryGetInventoryArgs = {
  where: InventoryWhereUniqueInput;
};


export type QueryGetLanguageArgs = {
  where: LanguageWhereUniqueInput;
};


export type QueryGetPaymentArgs = {
  where: PaymentWhereUniqueInput;
};


export type QueryGetRentalArgs = {
  where: RentalWhereUniqueInput;
};


export type QueryGetStoreArgs = {
  where: StoreWhereUniqueInput;
};


export type QueryGroupByActorArgs = {
  by: Array<ActorScalarFieldEnum>;
  having?: InputMaybe<ActorScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ActorOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActorWhereInput>;
};


export type QueryGroupByAddressArgs = {
  by: Array<AddressScalarFieldEnum>;
  having?: InputMaybe<AddressScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AddressOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddressWhereInput>;
};


export type QueryGroupByCategoryArgs = {
  by: Array<CategoryScalarFieldEnum>;
  having?: InputMaybe<CategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CategoryWhereInput>;
};


export type QueryGroupByCityArgs = {
  by: Array<CityScalarFieldEnum>;
  having?: InputMaybe<CityScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CityOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CityWhereInput>;
};


export type QueryGroupByCountryArgs = {
  by: Array<CountryScalarFieldEnum>;
  having?: InputMaybe<CountryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CountryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CountryWhereInput>;
};


export type QueryGroupByCustomerArgs = {
  by: Array<CustomerScalarFieldEnum>;
  having?: InputMaybe<CustomerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};


export type QueryGroupByFilmArgs = {
  by: Array<FilmScalarFieldEnum>;
  having?: InputMaybe<FilmScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FilmOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FilmWhereInput>;
};


export type QueryGroupByFilm_ActorArgs = {
  by: Array<Film_ActorScalarFieldEnum>;
  having?: InputMaybe<Film_ActorScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<Film_ActorOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_ActorWhereInput>;
};


export type QueryGroupByFilm_CategoryArgs = {
  by: Array<Film_CategoryScalarFieldEnum>;
  having?: InputMaybe<Film_CategoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<Film_CategoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_CategoryWhereInput>;
};


export type QueryGroupByFilm_TextArgs = {
  by: Array<Film_TextScalarFieldEnum>;
  having?: InputMaybe<Film_TextScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<Film_TextOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Film_TextWhereInput>;
};


export type QueryGroupByInventoryArgs = {
  by: Array<InventoryScalarFieldEnum>;
  having?: InputMaybe<InventoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InventoryWhereInput>;
};


export type QueryGroupByLanguageArgs = {
  by: Array<LanguageScalarFieldEnum>;
  having?: InputMaybe<LanguageScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LanguageOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LanguageWhereInput>;
};


export type QueryGroupByPaymentArgs = {
  by: Array<PaymentScalarFieldEnum>;
  having?: InputMaybe<PaymentScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PaymentOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaymentWhereInput>;
};


export type QueryGroupByRentalArgs = {
  by: Array<RentalScalarFieldEnum>;
  having?: InputMaybe<RentalScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<RentalOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RentalWhereInput>;
};


export type QueryGroupByStaffArgs = {
  by: Array<StaffScalarFieldEnum>;
  having?: InputMaybe<StaffScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<StaffOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StaffWhereInput>;
};


export type QueryGroupByStoreArgs = {
  by: Array<StoreScalarFieldEnum>;
  having?: InputMaybe<StoreScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<StoreOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StoreWhereInput>;
};


export type QueryInventoriesArgs = {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InventoryWhereInput>;
};


export type QueryInventoryArgs = {
  where: InventoryWhereUniqueInput;
};


export type QueryLanguageArgs = {
  where: LanguageWhereUniqueInput;
};


export type QueryLanguagesArgs = {
  cursor?: InputMaybe<LanguageWhereUniqueInput>;
  distinct?: InputMaybe<Array<LanguageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LanguageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LanguageWhereInput>;
};


export type QueryPaymentArgs = {
  where: PaymentWhereUniqueInput;
};


export type QueryPaymentsArgs = {
  cursor?: InputMaybe<PaymentWhereUniqueInput>;
  distinct?: InputMaybe<Array<PaymentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PaymentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaymentWhereInput>;
};


export type QueryRentalArgs = {
  where: RentalWhereUniqueInput;
};


export type QueryRentalsArgs = {
  cursor?: InputMaybe<RentalWhereUniqueInput>;
  distinct?: InputMaybe<Array<RentalScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RentalOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RentalWhereInput>;
};


export type QueryStoreArgs = {
  where: StoreWhereUniqueInput;
};


export type QueryStoresArgs = {
  cursor?: InputMaybe<StoreWhereUniqueInput>;
  distinct?: InputMaybe<Array<StoreScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StoreOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StoreWhereInput>;
};

export type Rental = {
  __typename?: 'Rental';
  _count?: Maybe<RentalCount>;
  customer: Customer;
  customer_id: Scalars['Int']['output'];
  inventory: Inventory;
  inventory_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
  payment: Array<Payment>;
  rental_date: Scalars['DateTimeISO']['output'];
  rental_id: Scalars['Int']['output'];
  return_date?: Maybe<Scalars['DateTimeISO']['output']>;
  staff: Staff;
  staff_id: Scalars['Int']['output'];
};


export type RentalPaymentArgs = {
  cursor?: InputMaybe<PaymentWhereUniqueInput>;
  distinct?: InputMaybe<Array<PaymentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PaymentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaymentWhereInput>;
};

export type RentalAvgAggregate = {
  __typename?: 'RentalAvgAggregate';
  customer_id?: Maybe<Scalars['Float']['output']>;
  inventory_id?: Maybe<Scalars['Float']['output']>;
  rental_id?: Maybe<Scalars['Float']['output']>;
  staff_id?: Maybe<Scalars['Float']['output']>;
};

export type RentalAvgOrderByAggregateInput = {
  customer_id?: InputMaybe<SortOrder>;
  inventory_id?: InputMaybe<SortOrder>;
  rental_id?: InputMaybe<SortOrder>;
  staff_id?: InputMaybe<SortOrder>;
};

export type RentalCount = {
  __typename?: 'RentalCount';
  payment: Scalars['Int']['output'];
};


export type RentalCountPaymentArgs = {
  where?: InputMaybe<PaymentWhereInput>;
};

export type RentalCountAggregate = {
  __typename?: 'RentalCountAggregate';
  _all: Scalars['Int']['output'];
  customer_id: Scalars['Int']['output'];
  inventory_id: Scalars['Int']['output'];
  last_update: Scalars['Int']['output'];
  rental_date: Scalars['Int']['output'];
  rental_id: Scalars['Int']['output'];
  return_date: Scalars['Int']['output'];
  staff_id: Scalars['Int']['output'];
};

export type RentalCountOrderByAggregateInput = {
  customer_id?: InputMaybe<SortOrder>;
  inventory_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  rental_date?: InputMaybe<SortOrder>;
  rental_id?: InputMaybe<SortOrder>;
  return_date?: InputMaybe<SortOrder>;
  staff_id?: InputMaybe<SortOrder>;
};

export type RentalCreateInput = {
  customer: CustomerCreateNestedOneWithoutRentalInput;
  inventory: InventoryCreateNestedOneWithoutRentalInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  payment?: InputMaybe<PaymentCreateNestedManyWithoutRentalInput>;
  rental_date: Scalars['DateTimeISO']['input'];
  return_date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  staff: StaffCreateNestedOneWithoutRentalInput;
};

export type RentalCreateManyCustomerInput = {
  inventory_id: Scalars['Int']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  rental_date: Scalars['DateTimeISO']['input'];
  rental_id?: InputMaybe<Scalars['Int']['input']>;
  return_date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  staff_id: Scalars['Int']['input'];
};

export type RentalCreateManyCustomerInputEnvelope = {
  data: Array<RentalCreateManyCustomerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RentalCreateManyInput = {
  customer_id: Scalars['Int']['input'];
  inventory_id: Scalars['Int']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  rental_date: Scalars['DateTimeISO']['input'];
  rental_id?: InputMaybe<Scalars['Int']['input']>;
  return_date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  staff_id: Scalars['Int']['input'];
};

export type RentalCreateManyInventoryInput = {
  customer_id: Scalars['Int']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  rental_date: Scalars['DateTimeISO']['input'];
  rental_id?: InputMaybe<Scalars['Int']['input']>;
  return_date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  staff_id: Scalars['Int']['input'];
};

export type RentalCreateManyInventoryInputEnvelope = {
  data: Array<RentalCreateManyInventoryInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RentalCreateManyStaffInput = {
  customer_id: Scalars['Int']['input'];
  inventory_id: Scalars['Int']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  rental_date: Scalars['DateTimeISO']['input'];
  rental_id?: InputMaybe<Scalars['Int']['input']>;
  return_date?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type RentalCreateManyStaffInputEnvelope = {
  data: Array<RentalCreateManyStaffInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RentalCreateNestedManyWithoutCustomerInput = {
  connect?: InputMaybe<Array<RentalWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RentalCreateOrConnectWithoutCustomerInput>>;
  create?: InputMaybe<Array<RentalCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<RentalCreateManyCustomerInputEnvelope>;
};

export type RentalCreateNestedManyWithoutInventoryInput = {
  connect?: InputMaybe<Array<RentalWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RentalCreateOrConnectWithoutInventoryInput>>;
  create?: InputMaybe<Array<RentalCreateWithoutInventoryInput>>;
  createMany?: InputMaybe<RentalCreateManyInventoryInputEnvelope>;
};

export type RentalCreateNestedManyWithoutStaffInput = {
  connect?: InputMaybe<Array<RentalWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RentalCreateOrConnectWithoutStaffInput>>;
  create?: InputMaybe<Array<RentalCreateWithoutStaffInput>>;
  createMany?: InputMaybe<RentalCreateManyStaffInputEnvelope>;
};

export type RentalCreateNestedOneWithoutPaymentInput = {
  connect?: InputMaybe<RentalWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RentalCreateOrConnectWithoutPaymentInput>;
  create?: InputMaybe<RentalCreateWithoutPaymentInput>;
};

export type RentalCreateOrConnectWithoutCustomerInput = {
  create: RentalCreateWithoutCustomerInput;
  where: RentalWhereUniqueInput;
};

export type RentalCreateOrConnectWithoutInventoryInput = {
  create: RentalCreateWithoutInventoryInput;
  where: RentalWhereUniqueInput;
};

export type RentalCreateOrConnectWithoutPaymentInput = {
  create: RentalCreateWithoutPaymentInput;
  where: RentalWhereUniqueInput;
};

export type RentalCreateOrConnectWithoutStaffInput = {
  create: RentalCreateWithoutStaffInput;
  where: RentalWhereUniqueInput;
};

export type RentalCreateWithoutCustomerInput = {
  inventory: InventoryCreateNestedOneWithoutRentalInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  payment?: InputMaybe<PaymentCreateNestedManyWithoutRentalInput>;
  rental_date: Scalars['DateTimeISO']['input'];
  return_date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  staff: StaffCreateNestedOneWithoutRentalInput;
};

export type RentalCreateWithoutInventoryInput = {
  customer: CustomerCreateNestedOneWithoutRentalInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  payment?: InputMaybe<PaymentCreateNestedManyWithoutRentalInput>;
  rental_date: Scalars['DateTimeISO']['input'];
  return_date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  staff: StaffCreateNestedOneWithoutRentalInput;
};

export type RentalCreateWithoutPaymentInput = {
  customer: CustomerCreateNestedOneWithoutRentalInput;
  inventory: InventoryCreateNestedOneWithoutRentalInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  rental_date: Scalars['DateTimeISO']['input'];
  return_date?: InputMaybe<Scalars['DateTimeISO']['input']>;
  staff: StaffCreateNestedOneWithoutRentalInput;
};

export type RentalCreateWithoutStaffInput = {
  customer: CustomerCreateNestedOneWithoutRentalInput;
  inventory: InventoryCreateNestedOneWithoutRentalInput;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  payment?: InputMaybe<PaymentCreateNestedManyWithoutRentalInput>;
  rental_date: Scalars['DateTimeISO']['input'];
  return_date?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type RentalGroupBy = {
  __typename?: 'RentalGroupBy';
  _avg?: Maybe<RentalAvgAggregate>;
  _count?: Maybe<RentalCountAggregate>;
  _max?: Maybe<RentalMaxAggregate>;
  _min?: Maybe<RentalMinAggregate>;
  _sum?: Maybe<RentalSumAggregate>;
  customer_id: Scalars['Int']['output'];
  inventory_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
  rental_date: Scalars['DateTimeISO']['output'];
  rental_id: Scalars['Int']['output'];
  return_date?: Maybe<Scalars['DateTimeISO']['output']>;
  staff_id: Scalars['Int']['output'];
};

export type RentalListRelationFilter = {
  every?: InputMaybe<RentalWhereInput>;
  none?: InputMaybe<RentalWhereInput>;
  some?: InputMaybe<RentalWhereInput>;
};

export type RentalMaxAggregate = {
  __typename?: 'RentalMaxAggregate';
  customer_id?: Maybe<Scalars['Int']['output']>;
  inventory_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  rental_date?: Maybe<Scalars['DateTimeISO']['output']>;
  rental_id?: Maybe<Scalars['Int']['output']>;
  return_date?: Maybe<Scalars['DateTimeISO']['output']>;
  staff_id?: Maybe<Scalars['Int']['output']>;
};

export type RentalMaxOrderByAggregateInput = {
  customer_id?: InputMaybe<SortOrder>;
  inventory_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  rental_date?: InputMaybe<SortOrder>;
  rental_id?: InputMaybe<SortOrder>;
  return_date?: InputMaybe<SortOrder>;
  staff_id?: InputMaybe<SortOrder>;
};

export type RentalMinAggregate = {
  __typename?: 'RentalMinAggregate';
  customer_id?: Maybe<Scalars['Int']['output']>;
  inventory_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  rental_date?: Maybe<Scalars['DateTimeISO']['output']>;
  rental_id?: Maybe<Scalars['Int']['output']>;
  return_date?: Maybe<Scalars['DateTimeISO']['output']>;
  staff_id?: Maybe<Scalars['Int']['output']>;
};

export type RentalMinOrderByAggregateInput = {
  customer_id?: InputMaybe<SortOrder>;
  inventory_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  rental_date?: InputMaybe<SortOrder>;
  rental_id?: InputMaybe<SortOrder>;
  return_date?: InputMaybe<SortOrder>;
  staff_id?: InputMaybe<SortOrder>;
};

export type RentalNullableRelationFilter = {
  is?: InputMaybe<RentalWhereInput>;
  isNot?: InputMaybe<RentalWhereInput>;
};

export type RentalOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RentalOrderByWithAggregationInput = {
  _avg?: InputMaybe<RentalAvgOrderByAggregateInput>;
  _count?: InputMaybe<RentalCountOrderByAggregateInput>;
  _max?: InputMaybe<RentalMaxOrderByAggregateInput>;
  _min?: InputMaybe<RentalMinOrderByAggregateInput>;
  _sum?: InputMaybe<RentalSumOrderByAggregateInput>;
  customer_id?: InputMaybe<SortOrder>;
  inventory_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  rental_date?: InputMaybe<SortOrder>;
  rental_id?: InputMaybe<SortOrder>;
  return_date?: InputMaybe<SortOrderInput>;
  staff_id?: InputMaybe<SortOrder>;
};

export type RentalOrderByWithRelationInput = {
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customer_id?: InputMaybe<SortOrder>;
  inventory?: InputMaybe<InventoryOrderByWithRelationInput>;
  inventory_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  payment?: InputMaybe<PaymentOrderByRelationAggregateInput>;
  rental_date?: InputMaybe<SortOrder>;
  rental_id?: InputMaybe<SortOrder>;
  return_date?: InputMaybe<SortOrderInput>;
  staff?: InputMaybe<StaffOrderByWithRelationInput>;
  staff_id?: InputMaybe<SortOrder>;
};

export enum RentalScalarFieldEnum {
  CustomerId = 'customer_id',
  InventoryId = 'inventory_id',
  LastUpdate = 'last_update',
  RentalDate = 'rental_date',
  RentalId = 'rental_id',
  ReturnDate = 'return_date',
  StaffId = 'staff_id'
}

export type RentalScalarWhereInput = {
  AND?: InputMaybe<Array<RentalScalarWhereInput>>;
  NOT?: InputMaybe<Array<RentalScalarWhereInput>>;
  OR?: InputMaybe<Array<RentalScalarWhereInput>>;
  customer_id?: InputMaybe<IntFilter>;
  inventory_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  rental_date?: InputMaybe<DateTimeFilter>;
  rental_id?: InputMaybe<IntFilter>;
  return_date?: InputMaybe<DateTimeNullableFilter>;
  staff_id?: InputMaybe<IntFilter>;
};

export type RentalScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RentalScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RentalScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RentalScalarWhereWithAggregatesInput>>;
  customer_id?: InputMaybe<IntWithAggregatesFilter>;
  inventory_id?: InputMaybe<IntWithAggregatesFilter>;
  last_update?: InputMaybe<DateTimeWithAggregatesFilter>;
  rental_date?: InputMaybe<DateTimeWithAggregatesFilter>;
  rental_id?: InputMaybe<IntWithAggregatesFilter>;
  return_date?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  staff_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type RentalSumAggregate = {
  __typename?: 'RentalSumAggregate';
  customer_id?: Maybe<Scalars['Int']['output']>;
  inventory_id?: Maybe<Scalars['Int']['output']>;
  rental_id?: Maybe<Scalars['Int']['output']>;
  staff_id?: Maybe<Scalars['Int']['output']>;
};

export type RentalSumOrderByAggregateInput = {
  customer_id?: InputMaybe<SortOrder>;
  inventory_id?: InputMaybe<SortOrder>;
  rental_id?: InputMaybe<SortOrder>;
  staff_id?: InputMaybe<SortOrder>;
};

export type RentalUpdateInput = {
  customer?: InputMaybe<CustomerUpdateOneRequiredWithoutRentalNestedInput>;
  inventory?: InputMaybe<InventoryUpdateOneRequiredWithoutRentalNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  payment?: InputMaybe<PaymentUpdateManyWithoutRentalNestedInput>;
  rental_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  return_date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneRequiredWithoutRentalNestedInput>;
};

export type RentalUpdateManyMutationInput = {
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  rental_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  return_date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type RentalUpdateManyWithWhereWithoutCustomerInput = {
  data: RentalUpdateManyMutationInput;
  where: RentalScalarWhereInput;
};

export type RentalUpdateManyWithWhereWithoutInventoryInput = {
  data: RentalUpdateManyMutationInput;
  where: RentalScalarWhereInput;
};

export type RentalUpdateManyWithWhereWithoutStaffInput = {
  data: RentalUpdateManyMutationInput;
  where: RentalScalarWhereInput;
};

export type RentalUpdateManyWithoutCustomerNestedInput = {
  connect?: InputMaybe<Array<RentalWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RentalCreateOrConnectWithoutCustomerInput>>;
  create?: InputMaybe<Array<RentalCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<RentalCreateManyCustomerInputEnvelope>;
  delete?: InputMaybe<Array<RentalWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RentalScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RentalWhereUniqueInput>>;
  set?: InputMaybe<Array<RentalWhereUniqueInput>>;
  update?: InputMaybe<Array<RentalUpdateWithWhereUniqueWithoutCustomerInput>>;
  updateMany?: InputMaybe<Array<RentalUpdateManyWithWhereWithoutCustomerInput>>;
  upsert?: InputMaybe<Array<RentalUpsertWithWhereUniqueWithoutCustomerInput>>;
};

export type RentalUpdateManyWithoutInventoryNestedInput = {
  connect?: InputMaybe<Array<RentalWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RentalCreateOrConnectWithoutInventoryInput>>;
  create?: InputMaybe<Array<RentalCreateWithoutInventoryInput>>;
  createMany?: InputMaybe<RentalCreateManyInventoryInputEnvelope>;
  delete?: InputMaybe<Array<RentalWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RentalScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RentalWhereUniqueInput>>;
  set?: InputMaybe<Array<RentalWhereUniqueInput>>;
  update?: InputMaybe<Array<RentalUpdateWithWhereUniqueWithoutInventoryInput>>;
  updateMany?: InputMaybe<Array<RentalUpdateManyWithWhereWithoutInventoryInput>>;
  upsert?: InputMaybe<Array<RentalUpsertWithWhereUniqueWithoutInventoryInput>>;
};

export type RentalUpdateManyWithoutStaffNestedInput = {
  connect?: InputMaybe<Array<RentalWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RentalCreateOrConnectWithoutStaffInput>>;
  create?: InputMaybe<Array<RentalCreateWithoutStaffInput>>;
  createMany?: InputMaybe<RentalCreateManyStaffInputEnvelope>;
  delete?: InputMaybe<Array<RentalWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RentalScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RentalWhereUniqueInput>>;
  set?: InputMaybe<Array<RentalWhereUniqueInput>>;
  update?: InputMaybe<Array<RentalUpdateWithWhereUniqueWithoutStaffInput>>;
  updateMany?: InputMaybe<Array<RentalUpdateManyWithWhereWithoutStaffInput>>;
  upsert?: InputMaybe<Array<RentalUpsertWithWhereUniqueWithoutStaffInput>>;
};

export type RentalUpdateOneWithoutPaymentNestedInput = {
  connect?: InputMaybe<RentalWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RentalCreateOrConnectWithoutPaymentInput>;
  create?: InputMaybe<RentalCreateWithoutPaymentInput>;
  delete?: InputMaybe<RentalWhereInput>;
  disconnect?: InputMaybe<RentalWhereInput>;
  update?: InputMaybe<RentalUpdateToOneWithWhereWithoutPaymentInput>;
  upsert?: InputMaybe<RentalUpsertWithoutPaymentInput>;
};

export type RentalUpdateToOneWithWhereWithoutPaymentInput = {
  data: RentalUpdateWithoutPaymentInput;
  where?: InputMaybe<RentalWhereInput>;
};

export type RentalUpdateWithWhereUniqueWithoutCustomerInput = {
  data: RentalUpdateWithoutCustomerInput;
  where: RentalWhereUniqueInput;
};

export type RentalUpdateWithWhereUniqueWithoutInventoryInput = {
  data: RentalUpdateWithoutInventoryInput;
  where: RentalWhereUniqueInput;
};

export type RentalUpdateWithWhereUniqueWithoutStaffInput = {
  data: RentalUpdateWithoutStaffInput;
  where: RentalWhereUniqueInput;
};

export type RentalUpdateWithoutCustomerInput = {
  inventory?: InputMaybe<InventoryUpdateOneRequiredWithoutRentalNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  payment?: InputMaybe<PaymentUpdateManyWithoutRentalNestedInput>;
  rental_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  return_date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneRequiredWithoutRentalNestedInput>;
};

export type RentalUpdateWithoutInventoryInput = {
  customer?: InputMaybe<CustomerUpdateOneRequiredWithoutRentalNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  payment?: InputMaybe<PaymentUpdateManyWithoutRentalNestedInput>;
  rental_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  return_date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneRequiredWithoutRentalNestedInput>;
};

export type RentalUpdateWithoutPaymentInput = {
  customer?: InputMaybe<CustomerUpdateOneRequiredWithoutRentalNestedInput>;
  inventory?: InputMaybe<InventoryUpdateOneRequiredWithoutRentalNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  rental_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  return_date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  staff?: InputMaybe<StaffUpdateOneRequiredWithoutRentalNestedInput>;
};

export type RentalUpdateWithoutStaffInput = {
  customer?: InputMaybe<CustomerUpdateOneRequiredWithoutRentalNestedInput>;
  inventory?: InputMaybe<InventoryUpdateOneRequiredWithoutRentalNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  payment?: InputMaybe<PaymentUpdateManyWithoutRentalNestedInput>;
  rental_date?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  return_date?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
};

export type RentalUpsertWithWhereUniqueWithoutCustomerInput = {
  create: RentalCreateWithoutCustomerInput;
  update: RentalUpdateWithoutCustomerInput;
  where: RentalWhereUniqueInput;
};

export type RentalUpsertWithWhereUniqueWithoutInventoryInput = {
  create: RentalCreateWithoutInventoryInput;
  update: RentalUpdateWithoutInventoryInput;
  where: RentalWhereUniqueInput;
};

export type RentalUpsertWithWhereUniqueWithoutStaffInput = {
  create: RentalCreateWithoutStaffInput;
  update: RentalUpdateWithoutStaffInput;
  where: RentalWhereUniqueInput;
};

export type RentalUpsertWithoutPaymentInput = {
  create: RentalCreateWithoutPaymentInput;
  update: RentalUpdateWithoutPaymentInput;
  where?: InputMaybe<RentalWhereInput>;
};

export type RentalWhereInput = {
  AND?: InputMaybe<Array<RentalWhereInput>>;
  NOT?: InputMaybe<Array<RentalWhereInput>>;
  OR?: InputMaybe<Array<RentalWhereInput>>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customer_id?: InputMaybe<IntFilter>;
  inventory?: InputMaybe<InventoryRelationFilter>;
  inventory_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  payment?: InputMaybe<PaymentListRelationFilter>;
  rental_date?: InputMaybe<DateTimeFilter>;
  rental_id?: InputMaybe<IntFilter>;
  return_date?: InputMaybe<DateTimeNullableFilter>;
  staff?: InputMaybe<StaffRelationFilter>;
  staff_id?: InputMaybe<IntFilter>;
};

export type RentalWhereUniqueInput = {
  AND?: InputMaybe<Array<RentalWhereInput>>;
  NOT?: InputMaybe<Array<RentalWhereInput>>;
  OR?: InputMaybe<Array<RentalWhereInput>>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customer_id?: InputMaybe<IntFilter>;
  inventory?: InputMaybe<InventoryRelationFilter>;
  inventory_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  payment?: InputMaybe<PaymentListRelationFilter>;
  rental_date?: InputMaybe<DateTimeFilter>;
  rental_date_inventory_id_customer_id?: InputMaybe<RentalRental_DateInventory_IdCustomer_IdCompoundUniqueInput>;
  rental_id?: InputMaybe<Scalars['Int']['input']>;
  return_date?: InputMaybe<DateTimeNullableFilter>;
  staff?: InputMaybe<StaffRelationFilter>;
  staff_id?: InputMaybe<IntFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type Staff = {
  __typename?: 'Staff';
  _count?: Maybe<StaffCount>;
  active: Scalars['Boolean']['output'];
  address: Address;
  address_id: Scalars['Int']['output'];
  email?: Maybe<Scalars['String']['output']>;
  first_name: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  last_update: Scalars['DateTimeISO']['output'];
  password?: Maybe<Scalars['String']['output']>;
  payment: Array<Payment>;
  picture?: Maybe<Scalars['Byte']['output']>;
  rental: Array<Rental>;
  staff_id: Scalars['Int']['output'];
  store_id: Scalars['Int']['output'];
  store_staff_store_idTostore: Store;
  store_store_manager_staff_idTostaff?: Maybe<Store>;
  username: Scalars['String']['output'];
};


export type StaffPaymentArgs = {
  cursor?: InputMaybe<PaymentWhereUniqueInput>;
  distinct?: InputMaybe<Array<PaymentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PaymentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaymentWhereInput>;
};


export type StaffRentalArgs = {
  cursor?: InputMaybe<RentalWhereUniqueInput>;
  distinct?: InputMaybe<Array<RentalScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RentalOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RentalWhereInput>;
};


export type StaffStore_Store_Manager_Staff_IdTostaffArgs = {
  where?: InputMaybe<StoreWhereInput>;
};

export type StaffAvgAggregate = {
  __typename?: 'StaffAvgAggregate';
  address_id?: Maybe<Scalars['Float']['output']>;
  staff_id?: Maybe<Scalars['Float']['output']>;
  store_id?: Maybe<Scalars['Float']['output']>;
};

export type StaffAvgOrderByAggregateInput = {
  address_id?: InputMaybe<SortOrder>;
  staff_id?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type StaffCount = {
  __typename?: 'StaffCount';
  payment: Scalars['Int']['output'];
  rental: Scalars['Int']['output'];
};


export type StaffCountPaymentArgs = {
  where?: InputMaybe<PaymentWhereInput>;
};


export type StaffCountRentalArgs = {
  where?: InputMaybe<RentalWhereInput>;
};

export type StaffCountAggregate = {
  __typename?: 'StaffCountAggregate';
  _all: Scalars['Int']['output'];
  active: Scalars['Int']['output'];
  address_id: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  first_name: Scalars['Int']['output'];
  last_name: Scalars['Int']['output'];
  last_update: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  picture: Scalars['Int']['output'];
  staff_id: Scalars['Int']['output'];
  store_id: Scalars['Int']['output'];
  username: Scalars['Int']['output'];
};

export type StaffCountOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  address_id?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  staff_id?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type StaffCreateInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address: AddressCreateNestedOneWithoutStaffInput;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<PaymentCreateNestedManyWithoutStaffInput>;
  picture?: InputMaybe<Scalars['Byte']['input']>;
  rental?: InputMaybe<RentalCreateNestedManyWithoutStaffInput>;
  store_staff_store_idTostore: StoreCreateNestedOneWithoutStaff_Staff_Store_IdTostoreInput;
  store_store_manager_staff_idTostaff?: InputMaybe<StoreCreateNestedOneWithoutStaff_Store_Manager_Staff_IdTostaffInput>;
  username: Scalars['String']['input'];
};

export type StaffCreateManyAddressInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['Byte']['input']>;
  staff_id?: InputMaybe<Scalars['Int']['input']>;
  store_id: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};

export type StaffCreateManyAddressInputEnvelope = {
  data: Array<StaffCreateManyAddressInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StaffCreateManyInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address_id: Scalars['Int']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['Byte']['input']>;
  staff_id?: InputMaybe<Scalars['Int']['input']>;
  store_id: Scalars['Int']['input'];
  username: Scalars['String']['input'];
};

export type StaffCreateManyStore_Staff_Store_IdTostoreInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address_id: Scalars['Int']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['Byte']['input']>;
  staff_id?: InputMaybe<Scalars['Int']['input']>;
  username: Scalars['String']['input'];
};

export type StaffCreateManyStore_Staff_Store_IdTostoreInputEnvelope = {
  data: Array<StaffCreateManyStore_Staff_Store_IdTostoreInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StaffCreateNestedManyWithoutStore_Staff_Store_IdTostoreInput = {
  connect?: InputMaybe<Array<StaffWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StaffCreateOrConnectWithoutStore_Staff_Store_IdTostoreInput>>;
  create?: InputMaybe<Array<StaffCreateWithoutStore_Staff_Store_IdTostoreInput>>;
  createMany?: InputMaybe<StaffCreateManyStore_Staff_Store_IdTostoreInputEnvelope>;
};

export type StaffCreateNestedOneWithoutPaymentInput = {
  connect?: InputMaybe<StaffWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StaffCreateOrConnectWithoutPaymentInput>;
  create?: InputMaybe<StaffCreateWithoutPaymentInput>;
};

export type StaffCreateNestedOneWithoutRentalInput = {
  connect?: InputMaybe<StaffWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StaffCreateOrConnectWithoutRentalInput>;
  create?: InputMaybe<StaffCreateWithoutRentalInput>;
};

export type StaffCreateNestedOneWithoutStore_Store_Manager_Staff_IdTostaffInput = {
  connect?: InputMaybe<StaffWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StaffCreateOrConnectWithoutStore_Store_Manager_Staff_IdTostaffInput>;
  create?: InputMaybe<StaffCreateWithoutStore_Store_Manager_Staff_IdTostaffInput>;
};

export type StaffCreateOrConnectWithoutAddressInput = {
  create: StaffCreateWithoutAddressInput;
  where: StaffWhereUniqueInput;
};

export type StaffCreateOrConnectWithoutPaymentInput = {
  create: StaffCreateWithoutPaymentInput;
  where: StaffWhereUniqueInput;
};

export type StaffCreateOrConnectWithoutRentalInput = {
  create: StaffCreateWithoutRentalInput;
  where: StaffWhereUniqueInput;
};

export type StaffCreateOrConnectWithoutStore_Staff_Store_IdTostoreInput = {
  create: StaffCreateWithoutStore_Staff_Store_IdTostoreInput;
  where: StaffWhereUniqueInput;
};

export type StaffCreateOrConnectWithoutStore_Store_Manager_Staff_IdTostaffInput = {
  create: StaffCreateWithoutStore_Store_Manager_Staff_IdTostaffInput;
  where: StaffWhereUniqueInput;
};

export type StaffCreateWithoutAddressInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<PaymentCreateNestedManyWithoutStaffInput>;
  picture?: InputMaybe<Scalars['Byte']['input']>;
  rental?: InputMaybe<RentalCreateNestedManyWithoutStaffInput>;
  store_staff_store_idTostore: StoreCreateNestedOneWithoutStaff_Staff_Store_IdTostoreInput;
  store_store_manager_staff_idTostaff?: InputMaybe<StoreCreateNestedOneWithoutStaff_Store_Manager_Staff_IdTostaffInput>;
  username: Scalars['String']['input'];
};

export type StaffCreateWithoutPaymentInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address: AddressCreateNestedOneWithoutStaffInput;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['Byte']['input']>;
  rental?: InputMaybe<RentalCreateNestedManyWithoutStaffInput>;
  store_staff_store_idTostore: StoreCreateNestedOneWithoutStaff_Staff_Store_IdTostoreInput;
  store_store_manager_staff_idTostaff?: InputMaybe<StoreCreateNestedOneWithoutStaff_Store_Manager_Staff_IdTostaffInput>;
  username: Scalars['String']['input'];
};

export type StaffCreateWithoutRentalInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address: AddressCreateNestedOneWithoutStaffInput;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<PaymentCreateNestedManyWithoutStaffInput>;
  picture?: InputMaybe<Scalars['Byte']['input']>;
  store_staff_store_idTostore: StoreCreateNestedOneWithoutStaff_Staff_Store_IdTostoreInput;
  store_store_manager_staff_idTostaff?: InputMaybe<StoreCreateNestedOneWithoutStaff_Store_Manager_Staff_IdTostaffInput>;
  username: Scalars['String']['input'];
};

export type StaffCreateWithoutStore_Staff_Store_IdTostoreInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address: AddressCreateNestedOneWithoutStaffInput;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<PaymentCreateNestedManyWithoutStaffInput>;
  picture?: InputMaybe<Scalars['Byte']['input']>;
  rental?: InputMaybe<RentalCreateNestedManyWithoutStaffInput>;
  store_store_manager_staff_idTostaff?: InputMaybe<StoreCreateNestedOneWithoutStaff_Store_Manager_Staff_IdTostaffInput>;
  username: Scalars['String']['input'];
};

export type StaffCreateWithoutStore_Store_Manager_Staff_IdTostaffInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address: AddressCreateNestedOneWithoutStaffInput;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<PaymentCreateNestedManyWithoutStaffInput>;
  picture?: InputMaybe<Scalars['Byte']['input']>;
  rental?: InputMaybe<RentalCreateNestedManyWithoutStaffInput>;
  store_staff_store_idTostore: StoreCreateNestedOneWithoutStaff_Staff_Store_IdTostoreInput;
  username: Scalars['String']['input'];
};

export type StaffGroupBy = {
  __typename?: 'StaffGroupBy';
  _avg?: Maybe<StaffAvgAggregate>;
  _count?: Maybe<StaffCountAggregate>;
  _max?: Maybe<StaffMaxAggregate>;
  _min?: Maybe<StaffMinAggregate>;
  _sum?: Maybe<StaffSumAggregate>;
  active: Scalars['Boolean']['output'];
  address_id: Scalars['Int']['output'];
  email?: Maybe<Scalars['String']['output']>;
  first_name: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  last_update: Scalars['DateTimeISO']['output'];
  password?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['Byte']['output']>;
  staff_id: Scalars['Int']['output'];
  store_id: Scalars['Int']['output'];
  username: Scalars['String']['output'];
};

export type StaffListRelationFilter = {
  every?: InputMaybe<StaffWhereInput>;
  none?: InputMaybe<StaffWhereInput>;
  some?: InputMaybe<StaffWhereInput>;
};

export type StaffMaxAggregate = {
  __typename?: 'StaffMaxAggregate';
  active?: Maybe<Scalars['Boolean']['output']>;
  address_id?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['Byte']['output']>;
  staff_id?: Maybe<Scalars['Int']['output']>;
  store_id?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type StaffMaxOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  address_id?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  staff_id?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type StaffMinAggregate = {
  __typename?: 'StaffMinAggregate';
  active?: Maybe<Scalars['Boolean']['output']>;
  address_id?: Maybe<Scalars['Int']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['Byte']['output']>;
  staff_id?: Maybe<Scalars['Int']['output']>;
  store_id?: Maybe<Scalars['Int']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type StaffMinOrderByAggregateInput = {
  active?: InputMaybe<SortOrder>;
  address_id?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  picture?: InputMaybe<SortOrder>;
  staff_id?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type StaffOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type StaffOrderByWithAggregationInput = {
  _avg?: InputMaybe<StaffAvgOrderByAggregateInput>;
  _count?: InputMaybe<StaffCountOrderByAggregateInput>;
  _max?: InputMaybe<StaffMaxOrderByAggregateInput>;
  _min?: InputMaybe<StaffMinOrderByAggregateInput>;
  _sum?: InputMaybe<StaffSumOrderByAggregateInput>;
  active?: InputMaybe<SortOrder>;
  address_id?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrderInput>;
  first_name?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrderInput>;
  picture?: InputMaybe<SortOrderInput>;
  staff_id?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type StaffOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  address?: InputMaybe<AddressOrderByWithRelationInput>;
  address_id?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrderInput>;
  first_name?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrderInput>;
  payment?: InputMaybe<PaymentOrderByRelationAggregateInput>;
  picture?: InputMaybe<SortOrderInput>;
  rental?: InputMaybe<RentalOrderByRelationAggregateInput>;
  staff_id?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
  store_staff_store_idTostore?: InputMaybe<StoreOrderByWithRelationInput>;
  store_store_manager_staff_idTostaff?: InputMaybe<StoreOrderByWithRelationInput>;
  username?: InputMaybe<SortOrder>;
};

export type StaffRelationFilter = {
  is?: InputMaybe<StaffWhereInput>;
  isNot?: InputMaybe<StaffWhereInput>;
};

export enum StaffScalarFieldEnum {
  Active = 'active',
  AddressId = 'address_id',
  Email = 'email',
  FirstName = 'first_name',
  LastName = 'last_name',
  LastUpdate = 'last_update',
  Password = 'password',
  Picture = 'picture',
  StaffId = 'staff_id',
  StoreId = 'store_id',
  Username = 'username'
}

export type StaffScalarWhereInput = {
  AND?: InputMaybe<Array<StaffScalarWhereInput>>;
  NOT?: InputMaybe<Array<StaffScalarWhereInput>>;
  OR?: InputMaybe<Array<StaffScalarWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  address_id?: InputMaybe<IntFilter>;
  email?: InputMaybe<StringNullableFilter>;
  first_name?: InputMaybe<StringFilter>;
  last_name?: InputMaybe<StringFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  password?: InputMaybe<StringNullableFilter>;
  picture?: InputMaybe<BytesNullableFilter>;
  staff_id?: InputMaybe<IntFilter>;
  store_id?: InputMaybe<IntFilter>;
  username?: InputMaybe<StringFilter>;
};

export type StaffScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<StaffScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<StaffScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<StaffScalarWhereWithAggregatesInput>>;
  active?: InputMaybe<BoolWithAggregatesFilter>;
  address_id?: InputMaybe<IntWithAggregatesFilter>;
  email?: InputMaybe<StringNullableWithAggregatesFilter>;
  first_name?: InputMaybe<StringWithAggregatesFilter>;
  last_name?: InputMaybe<StringWithAggregatesFilter>;
  last_update?: InputMaybe<DateTimeWithAggregatesFilter>;
  password?: InputMaybe<StringNullableWithAggregatesFilter>;
  picture?: InputMaybe<BytesNullableWithAggregatesFilter>;
  staff_id?: InputMaybe<IntWithAggregatesFilter>;
  store_id?: InputMaybe<IntWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type StaffSumAggregate = {
  __typename?: 'StaffSumAggregate';
  address_id?: Maybe<Scalars['Int']['output']>;
  staff_id?: Maybe<Scalars['Int']['output']>;
  store_id?: Maybe<Scalars['Int']['output']>;
};

export type StaffSumOrderByAggregateInput = {
  address_id?: InputMaybe<SortOrder>;
  staff_id?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type StaffUpdateInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<AddressUpdateOneRequiredWithoutStaffNestedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  payment?: InputMaybe<PaymentUpdateManyWithoutStaffNestedInput>;
  picture?: InputMaybe<NullableBytesFieldUpdateOperationsInput>;
  rental?: InputMaybe<RentalUpdateManyWithoutStaffNestedInput>;
  store_staff_store_idTostore?: InputMaybe<StoreUpdateOneRequiredWithoutStaff_Staff_Store_IdTostoreNestedInput>;
  store_store_manager_staff_idTostaff?: InputMaybe<StoreUpdateOneWithoutStaff_Store_Manager_Staff_IdTostaffNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type StaffUpdateManyMutationInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableBytesFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type StaffUpdateManyWithWhereWithoutAddressInput = {
  data: StaffUpdateManyMutationInput;
  where: StaffScalarWhereInput;
};

export type StaffUpdateManyWithWhereWithoutStore_Staff_Store_IdTostoreInput = {
  data: StaffUpdateManyMutationInput;
  where: StaffScalarWhereInput;
};

export type StaffUpdateManyWithoutAddressNestedInput = {
  connect?: InputMaybe<Array<StaffWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StaffCreateOrConnectWithoutAddressInput>>;
  create?: InputMaybe<Array<StaffCreateWithoutAddressInput>>;
  createMany?: InputMaybe<StaffCreateManyAddressInputEnvelope>;
  delete?: InputMaybe<Array<StaffWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<StaffScalarWhereInput>>;
  disconnect?: InputMaybe<Array<StaffWhereUniqueInput>>;
  set?: InputMaybe<Array<StaffWhereUniqueInput>>;
  update?: InputMaybe<Array<StaffUpdateWithWhereUniqueWithoutAddressInput>>;
  updateMany?: InputMaybe<Array<StaffUpdateManyWithWhereWithoutAddressInput>>;
  upsert?: InputMaybe<Array<StaffUpsertWithWhereUniqueWithoutAddressInput>>;
};

export type StaffUpdateManyWithoutStore_Staff_Store_IdTostoreNestedInput = {
  connect?: InputMaybe<Array<StaffWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StaffCreateOrConnectWithoutStore_Staff_Store_IdTostoreInput>>;
  create?: InputMaybe<Array<StaffCreateWithoutStore_Staff_Store_IdTostoreInput>>;
  createMany?: InputMaybe<StaffCreateManyStore_Staff_Store_IdTostoreInputEnvelope>;
  delete?: InputMaybe<Array<StaffWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<StaffScalarWhereInput>>;
  disconnect?: InputMaybe<Array<StaffWhereUniqueInput>>;
  set?: InputMaybe<Array<StaffWhereUniqueInput>>;
  update?: InputMaybe<Array<StaffUpdateWithWhereUniqueWithoutStore_Staff_Store_IdTostoreInput>>;
  updateMany?: InputMaybe<Array<StaffUpdateManyWithWhereWithoutStore_Staff_Store_IdTostoreInput>>;
  upsert?: InputMaybe<Array<StaffUpsertWithWhereUniqueWithoutStore_Staff_Store_IdTostoreInput>>;
};

export type StaffUpdateOneRequiredWithoutPaymentNestedInput = {
  connect?: InputMaybe<StaffWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StaffCreateOrConnectWithoutPaymentInput>;
  create?: InputMaybe<StaffCreateWithoutPaymentInput>;
  update?: InputMaybe<StaffUpdateToOneWithWhereWithoutPaymentInput>;
  upsert?: InputMaybe<StaffUpsertWithoutPaymentInput>;
};

export type StaffUpdateOneRequiredWithoutRentalNestedInput = {
  connect?: InputMaybe<StaffWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StaffCreateOrConnectWithoutRentalInput>;
  create?: InputMaybe<StaffCreateWithoutRentalInput>;
  update?: InputMaybe<StaffUpdateToOneWithWhereWithoutRentalInput>;
  upsert?: InputMaybe<StaffUpsertWithoutRentalInput>;
};

export type StaffUpdateOneRequiredWithoutStore_Store_Manager_Staff_IdTostaffNestedInput = {
  connect?: InputMaybe<StaffWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StaffCreateOrConnectWithoutStore_Store_Manager_Staff_IdTostaffInput>;
  create?: InputMaybe<StaffCreateWithoutStore_Store_Manager_Staff_IdTostaffInput>;
  update?: InputMaybe<StaffUpdateToOneWithWhereWithoutStore_Store_Manager_Staff_IdTostaffInput>;
  upsert?: InputMaybe<StaffUpsertWithoutStore_Store_Manager_Staff_IdTostaffInput>;
};

export type StaffUpdateToOneWithWhereWithoutPaymentInput = {
  data: StaffUpdateWithoutPaymentInput;
  where?: InputMaybe<StaffWhereInput>;
};

export type StaffUpdateToOneWithWhereWithoutRentalInput = {
  data: StaffUpdateWithoutRentalInput;
  where?: InputMaybe<StaffWhereInput>;
};

export type StaffUpdateToOneWithWhereWithoutStore_Store_Manager_Staff_IdTostaffInput = {
  data: StaffUpdateWithoutStore_Store_Manager_Staff_IdTostaffInput;
  where?: InputMaybe<StaffWhereInput>;
};

export type StaffUpdateWithWhereUniqueWithoutAddressInput = {
  data: StaffUpdateWithoutAddressInput;
  where: StaffWhereUniqueInput;
};

export type StaffUpdateWithWhereUniqueWithoutStore_Staff_Store_IdTostoreInput = {
  data: StaffUpdateWithoutStore_Staff_Store_IdTostoreInput;
  where: StaffWhereUniqueInput;
};

export type StaffUpdateWithoutAddressInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  payment?: InputMaybe<PaymentUpdateManyWithoutStaffNestedInput>;
  picture?: InputMaybe<NullableBytesFieldUpdateOperationsInput>;
  rental?: InputMaybe<RentalUpdateManyWithoutStaffNestedInput>;
  store_staff_store_idTostore?: InputMaybe<StoreUpdateOneRequiredWithoutStaff_Staff_Store_IdTostoreNestedInput>;
  store_store_manager_staff_idTostaff?: InputMaybe<StoreUpdateOneWithoutStaff_Store_Manager_Staff_IdTostaffNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type StaffUpdateWithoutPaymentInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<AddressUpdateOneRequiredWithoutStaffNestedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  picture?: InputMaybe<NullableBytesFieldUpdateOperationsInput>;
  rental?: InputMaybe<RentalUpdateManyWithoutStaffNestedInput>;
  store_staff_store_idTostore?: InputMaybe<StoreUpdateOneRequiredWithoutStaff_Staff_Store_IdTostoreNestedInput>;
  store_store_manager_staff_idTostaff?: InputMaybe<StoreUpdateOneWithoutStaff_Store_Manager_Staff_IdTostaffNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type StaffUpdateWithoutRentalInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<AddressUpdateOneRequiredWithoutStaffNestedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  payment?: InputMaybe<PaymentUpdateManyWithoutStaffNestedInput>;
  picture?: InputMaybe<NullableBytesFieldUpdateOperationsInput>;
  store_staff_store_idTostore?: InputMaybe<StoreUpdateOneRequiredWithoutStaff_Staff_Store_IdTostoreNestedInput>;
  store_store_manager_staff_idTostaff?: InputMaybe<StoreUpdateOneWithoutStaff_Store_Manager_Staff_IdTostaffNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type StaffUpdateWithoutStore_Staff_Store_IdTostoreInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<AddressUpdateOneRequiredWithoutStaffNestedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  payment?: InputMaybe<PaymentUpdateManyWithoutStaffNestedInput>;
  picture?: InputMaybe<NullableBytesFieldUpdateOperationsInput>;
  rental?: InputMaybe<RentalUpdateManyWithoutStaffNestedInput>;
  store_store_manager_staff_idTostaff?: InputMaybe<StoreUpdateOneWithoutStaff_Store_Manager_Staff_IdTostaffNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type StaffUpdateWithoutStore_Store_Manager_Staff_IdTostaffInput = {
  active?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<AddressUpdateOneRequiredWithoutStaffNestedInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  first_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  payment?: InputMaybe<PaymentUpdateManyWithoutStaffNestedInput>;
  picture?: InputMaybe<NullableBytesFieldUpdateOperationsInput>;
  rental?: InputMaybe<RentalUpdateManyWithoutStaffNestedInput>;
  store_staff_store_idTostore?: InputMaybe<StoreUpdateOneRequiredWithoutStaff_Staff_Store_IdTostoreNestedInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type StaffUpsertWithWhereUniqueWithoutAddressInput = {
  create: StaffCreateWithoutAddressInput;
  update: StaffUpdateWithoutAddressInput;
  where: StaffWhereUniqueInput;
};

export type StaffUpsertWithWhereUniqueWithoutStore_Staff_Store_IdTostoreInput = {
  create: StaffCreateWithoutStore_Staff_Store_IdTostoreInput;
  update: StaffUpdateWithoutStore_Staff_Store_IdTostoreInput;
  where: StaffWhereUniqueInput;
};

export type StaffUpsertWithoutPaymentInput = {
  create: StaffCreateWithoutPaymentInput;
  update: StaffUpdateWithoutPaymentInput;
  where?: InputMaybe<StaffWhereInput>;
};

export type StaffUpsertWithoutRentalInput = {
  create: StaffCreateWithoutRentalInput;
  update: StaffUpdateWithoutRentalInput;
  where?: InputMaybe<StaffWhereInput>;
};

export type StaffUpsertWithoutStore_Store_Manager_Staff_IdTostaffInput = {
  create: StaffCreateWithoutStore_Store_Manager_Staff_IdTostaffInput;
  update: StaffUpdateWithoutStore_Store_Manager_Staff_IdTostaffInput;
  where?: InputMaybe<StaffWhereInput>;
};

export type StaffWhereInput = {
  AND?: InputMaybe<Array<StaffWhereInput>>;
  NOT?: InputMaybe<Array<StaffWhereInput>>;
  OR?: InputMaybe<Array<StaffWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  address?: InputMaybe<AddressRelationFilter>;
  address_id?: InputMaybe<IntFilter>;
  email?: InputMaybe<StringNullableFilter>;
  first_name?: InputMaybe<StringFilter>;
  last_name?: InputMaybe<StringFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  password?: InputMaybe<StringNullableFilter>;
  payment?: InputMaybe<PaymentListRelationFilter>;
  picture?: InputMaybe<BytesNullableFilter>;
  rental?: InputMaybe<RentalListRelationFilter>;
  staff_id?: InputMaybe<IntFilter>;
  store_id?: InputMaybe<IntFilter>;
  store_staff_store_idTostore?: InputMaybe<StoreRelationFilter>;
  store_store_manager_staff_idTostaff?: InputMaybe<StoreNullableRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type StaffWhereUniqueInput = {
  AND?: InputMaybe<Array<StaffWhereInput>>;
  NOT?: InputMaybe<Array<StaffWhereInput>>;
  OR?: InputMaybe<Array<StaffWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  address?: InputMaybe<AddressRelationFilter>;
  address_id?: InputMaybe<IntFilter>;
  email?: InputMaybe<StringNullableFilter>;
  first_name?: InputMaybe<StringFilter>;
  last_name?: InputMaybe<StringFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  password?: InputMaybe<StringNullableFilter>;
  payment?: InputMaybe<PaymentListRelationFilter>;
  picture?: InputMaybe<BytesNullableFilter>;
  rental?: InputMaybe<RentalListRelationFilter>;
  staff_id?: InputMaybe<Scalars['Int']['input']>;
  store_id?: InputMaybe<IntFilter>;
  store_staff_store_idTostore?: InputMaybe<StoreRelationFilter>;
  store_store_manager_staff_idTostaff?: InputMaybe<StoreNullableRelationFilter>;
  username?: InputMaybe<StringFilter>;
};

export type Store = {
  __typename?: 'Store';
  _count?: Maybe<StoreCount>;
  address: Address;
  address_id: Scalars['Int']['output'];
  customer: Array<Customer>;
  inventory: Array<Inventory>;
  last_update: Scalars['DateTimeISO']['output'];
  manager_staff_id: Scalars['Int']['output'];
  staff_staff_store_idTostore: Array<Staff>;
  staff_store_manager_staff_idTostaff: Staff;
  store_id: Scalars['Int']['output'];
};


export type StoreCustomerArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerWhereInput>;
};


export type StoreInventoryArgs = {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InventoryWhereInput>;
};


export type StoreStaff_Staff_Store_IdTostoreArgs = {
  cursor?: InputMaybe<StaffWhereUniqueInput>;
  distinct?: InputMaybe<Array<StaffScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StaffOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<StaffWhereInput>;
};

export type StoreAvgAggregate = {
  __typename?: 'StoreAvgAggregate';
  address_id?: Maybe<Scalars['Float']['output']>;
  manager_staff_id?: Maybe<Scalars['Float']['output']>;
  store_id?: Maybe<Scalars['Float']['output']>;
};

export type StoreAvgOrderByAggregateInput = {
  address_id?: InputMaybe<SortOrder>;
  manager_staff_id?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type StoreCount = {
  __typename?: 'StoreCount';
  customer: Scalars['Int']['output'];
  inventory: Scalars['Int']['output'];
  staff_staff_store_idTostore: Scalars['Int']['output'];
};


export type StoreCountCustomerArgs = {
  where?: InputMaybe<CustomerWhereInput>;
};


export type StoreCountInventoryArgs = {
  where?: InputMaybe<InventoryWhereInput>;
};


export type StoreCountStaff_Staff_Store_IdTostoreArgs = {
  where?: InputMaybe<StaffWhereInput>;
};

export type StoreCountAggregate = {
  __typename?: 'StoreCountAggregate';
  _all: Scalars['Int']['output'];
  address_id: Scalars['Int']['output'];
  last_update: Scalars['Int']['output'];
  manager_staff_id: Scalars['Int']['output'];
  store_id: Scalars['Int']['output'];
};

export type StoreCountOrderByAggregateInput = {
  address_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  manager_staff_id?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type StoreCreateInput = {
  address: AddressCreateNestedOneWithoutStoreInput;
  customer?: InputMaybe<CustomerCreateNestedManyWithoutStoreInput>;
  inventory?: InputMaybe<InventoryCreateNestedManyWithoutStoreInput>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  staff_staff_store_idTostore?: InputMaybe<StaffCreateNestedManyWithoutStore_Staff_Store_IdTostoreInput>;
  staff_store_manager_staff_idTostaff: StaffCreateNestedOneWithoutStore_Store_Manager_Staff_IdTostaffInput;
};

export type StoreCreateManyAddressInput = {
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  manager_staff_id: Scalars['Int']['input'];
  store_id?: InputMaybe<Scalars['Int']['input']>;
};

export type StoreCreateManyAddressInputEnvelope = {
  data: Array<StoreCreateManyAddressInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StoreCreateManyInput = {
  address_id: Scalars['Int']['input'];
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  manager_staff_id: Scalars['Int']['input'];
  store_id?: InputMaybe<Scalars['Int']['input']>;
};

export type StoreCreateNestedOneWithoutCustomerInput = {
  connect?: InputMaybe<StoreWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StoreCreateOrConnectWithoutCustomerInput>;
  create?: InputMaybe<StoreCreateWithoutCustomerInput>;
};

export type StoreCreateNestedOneWithoutInventoryInput = {
  connect?: InputMaybe<StoreWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StoreCreateOrConnectWithoutInventoryInput>;
  create?: InputMaybe<StoreCreateWithoutInventoryInput>;
};

export type StoreCreateNestedOneWithoutStaff_Staff_Store_IdTostoreInput = {
  connect?: InputMaybe<StoreWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StoreCreateOrConnectWithoutStaff_Staff_Store_IdTostoreInput>;
  create?: InputMaybe<StoreCreateWithoutStaff_Staff_Store_IdTostoreInput>;
};

export type StoreCreateNestedOneWithoutStaff_Store_Manager_Staff_IdTostaffInput = {
  connect?: InputMaybe<StoreWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StoreCreateOrConnectWithoutStaff_Store_Manager_Staff_IdTostaffInput>;
  create?: InputMaybe<StoreCreateWithoutStaff_Store_Manager_Staff_IdTostaffInput>;
};

export type StoreCreateOrConnectWithoutAddressInput = {
  create: StoreCreateWithoutAddressInput;
  where: StoreWhereUniqueInput;
};

export type StoreCreateOrConnectWithoutCustomerInput = {
  create: StoreCreateWithoutCustomerInput;
  where: StoreWhereUniqueInput;
};

export type StoreCreateOrConnectWithoutInventoryInput = {
  create: StoreCreateWithoutInventoryInput;
  where: StoreWhereUniqueInput;
};

export type StoreCreateOrConnectWithoutStaff_Staff_Store_IdTostoreInput = {
  create: StoreCreateWithoutStaff_Staff_Store_IdTostoreInput;
  where: StoreWhereUniqueInput;
};

export type StoreCreateOrConnectWithoutStaff_Store_Manager_Staff_IdTostaffInput = {
  create: StoreCreateWithoutStaff_Store_Manager_Staff_IdTostaffInput;
  where: StoreWhereUniqueInput;
};

export type StoreCreateWithoutAddressInput = {
  customer?: InputMaybe<CustomerCreateNestedManyWithoutStoreInput>;
  inventory?: InputMaybe<InventoryCreateNestedManyWithoutStoreInput>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  staff_staff_store_idTostore?: InputMaybe<StaffCreateNestedManyWithoutStore_Staff_Store_IdTostoreInput>;
  staff_store_manager_staff_idTostaff: StaffCreateNestedOneWithoutStore_Store_Manager_Staff_IdTostaffInput;
};

export type StoreCreateWithoutCustomerInput = {
  address: AddressCreateNestedOneWithoutStoreInput;
  inventory?: InputMaybe<InventoryCreateNestedManyWithoutStoreInput>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  staff_staff_store_idTostore?: InputMaybe<StaffCreateNestedManyWithoutStore_Staff_Store_IdTostoreInput>;
  staff_store_manager_staff_idTostaff: StaffCreateNestedOneWithoutStore_Store_Manager_Staff_IdTostaffInput;
};

export type StoreCreateWithoutInventoryInput = {
  address: AddressCreateNestedOneWithoutStoreInput;
  customer?: InputMaybe<CustomerCreateNestedManyWithoutStoreInput>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  staff_staff_store_idTostore?: InputMaybe<StaffCreateNestedManyWithoutStore_Staff_Store_IdTostoreInput>;
  staff_store_manager_staff_idTostaff: StaffCreateNestedOneWithoutStore_Store_Manager_Staff_IdTostaffInput;
};

export type StoreCreateWithoutStaff_Staff_Store_IdTostoreInput = {
  address: AddressCreateNestedOneWithoutStoreInput;
  customer?: InputMaybe<CustomerCreateNestedManyWithoutStoreInput>;
  inventory?: InputMaybe<InventoryCreateNestedManyWithoutStoreInput>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  staff_store_manager_staff_idTostaff: StaffCreateNestedOneWithoutStore_Store_Manager_Staff_IdTostaffInput;
};

export type StoreCreateWithoutStaff_Store_Manager_Staff_IdTostaffInput = {
  address: AddressCreateNestedOneWithoutStoreInput;
  customer?: InputMaybe<CustomerCreateNestedManyWithoutStoreInput>;
  inventory?: InputMaybe<InventoryCreateNestedManyWithoutStoreInput>;
  last_update?: InputMaybe<Scalars['DateTimeISO']['input']>;
  staff_staff_store_idTostore?: InputMaybe<StaffCreateNestedManyWithoutStore_Staff_Store_IdTostoreInput>;
};

export type StoreGroupBy = {
  __typename?: 'StoreGroupBy';
  _avg?: Maybe<StoreAvgAggregate>;
  _count?: Maybe<StoreCountAggregate>;
  _max?: Maybe<StoreMaxAggregate>;
  _min?: Maybe<StoreMinAggregate>;
  _sum?: Maybe<StoreSumAggregate>;
  address_id: Scalars['Int']['output'];
  last_update: Scalars['DateTimeISO']['output'];
  manager_staff_id: Scalars['Int']['output'];
  store_id: Scalars['Int']['output'];
};

export type StoreListRelationFilter = {
  every?: InputMaybe<StoreWhereInput>;
  none?: InputMaybe<StoreWhereInput>;
  some?: InputMaybe<StoreWhereInput>;
};

export type StoreMaxAggregate = {
  __typename?: 'StoreMaxAggregate';
  address_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  manager_staff_id?: Maybe<Scalars['Int']['output']>;
  store_id?: Maybe<Scalars['Int']['output']>;
};

export type StoreMaxOrderByAggregateInput = {
  address_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  manager_staff_id?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type StoreMinAggregate = {
  __typename?: 'StoreMinAggregate';
  address_id?: Maybe<Scalars['Int']['output']>;
  last_update?: Maybe<Scalars['DateTimeISO']['output']>;
  manager_staff_id?: Maybe<Scalars['Int']['output']>;
  store_id?: Maybe<Scalars['Int']['output']>;
};

export type StoreMinOrderByAggregateInput = {
  address_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  manager_staff_id?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type StoreNullableRelationFilter = {
  is?: InputMaybe<StoreWhereInput>;
  isNot?: InputMaybe<StoreWhereInput>;
};

export type StoreOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type StoreOrderByWithAggregationInput = {
  _avg?: InputMaybe<StoreAvgOrderByAggregateInput>;
  _count?: InputMaybe<StoreCountOrderByAggregateInput>;
  _max?: InputMaybe<StoreMaxOrderByAggregateInput>;
  _min?: InputMaybe<StoreMinOrderByAggregateInput>;
  _sum?: InputMaybe<StoreSumOrderByAggregateInput>;
  address_id?: InputMaybe<SortOrder>;
  last_update?: InputMaybe<SortOrder>;
  manager_staff_id?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type StoreOrderByWithRelationInput = {
  address?: InputMaybe<AddressOrderByWithRelationInput>;
  address_id?: InputMaybe<SortOrder>;
  customer?: InputMaybe<CustomerOrderByRelationAggregateInput>;
  inventory?: InputMaybe<InventoryOrderByRelationAggregateInput>;
  last_update?: InputMaybe<SortOrder>;
  manager_staff_id?: InputMaybe<SortOrder>;
  staff_staff_store_idTostore?: InputMaybe<StaffOrderByRelationAggregateInput>;
  staff_store_manager_staff_idTostaff?: InputMaybe<StaffOrderByWithRelationInput>;
  store_id?: InputMaybe<SortOrder>;
};

export type StoreRelationFilter = {
  is?: InputMaybe<StoreWhereInput>;
  isNot?: InputMaybe<StoreWhereInput>;
};

export enum StoreScalarFieldEnum {
  AddressId = 'address_id',
  LastUpdate = 'last_update',
  ManagerStaffId = 'manager_staff_id',
  StoreId = 'store_id'
}

export type StoreScalarWhereInput = {
  AND?: InputMaybe<Array<StoreScalarWhereInput>>;
  NOT?: InputMaybe<Array<StoreScalarWhereInput>>;
  OR?: InputMaybe<Array<StoreScalarWhereInput>>;
  address_id?: InputMaybe<IntFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  manager_staff_id?: InputMaybe<IntFilter>;
  store_id?: InputMaybe<IntFilter>;
};

export type StoreScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<StoreScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<StoreScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<StoreScalarWhereWithAggregatesInput>>;
  address_id?: InputMaybe<IntWithAggregatesFilter>;
  last_update?: InputMaybe<DateTimeWithAggregatesFilter>;
  manager_staff_id?: InputMaybe<IntWithAggregatesFilter>;
  store_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type StoreSumAggregate = {
  __typename?: 'StoreSumAggregate';
  address_id?: Maybe<Scalars['Int']['output']>;
  manager_staff_id?: Maybe<Scalars['Int']['output']>;
  store_id?: Maybe<Scalars['Int']['output']>;
};

export type StoreSumOrderByAggregateInput = {
  address_id?: InputMaybe<SortOrder>;
  manager_staff_id?: InputMaybe<SortOrder>;
  store_id?: InputMaybe<SortOrder>;
};

export type StoreUpdateInput = {
  address?: InputMaybe<AddressUpdateOneRequiredWithoutStoreNestedInput>;
  customer?: InputMaybe<CustomerUpdateManyWithoutStoreNestedInput>;
  inventory?: InputMaybe<InventoryUpdateManyWithoutStoreNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  staff_staff_store_idTostore?: InputMaybe<StaffUpdateManyWithoutStore_Staff_Store_IdTostoreNestedInput>;
  staff_store_manager_staff_idTostaff?: InputMaybe<StaffUpdateOneRequiredWithoutStore_Store_Manager_Staff_IdTostaffNestedInput>;
};

export type StoreUpdateManyMutationInput = {
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type StoreUpdateManyWithWhereWithoutAddressInput = {
  data: StoreUpdateManyMutationInput;
  where: StoreScalarWhereInput;
};

export type StoreUpdateManyWithoutAddressNestedInput = {
  connect?: InputMaybe<Array<StoreWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<StoreCreateOrConnectWithoutAddressInput>>;
  create?: InputMaybe<Array<StoreCreateWithoutAddressInput>>;
  createMany?: InputMaybe<StoreCreateManyAddressInputEnvelope>;
  delete?: InputMaybe<Array<StoreWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<StoreScalarWhereInput>>;
  disconnect?: InputMaybe<Array<StoreWhereUniqueInput>>;
  set?: InputMaybe<Array<StoreWhereUniqueInput>>;
  update?: InputMaybe<Array<StoreUpdateWithWhereUniqueWithoutAddressInput>>;
  updateMany?: InputMaybe<Array<StoreUpdateManyWithWhereWithoutAddressInput>>;
  upsert?: InputMaybe<Array<StoreUpsertWithWhereUniqueWithoutAddressInput>>;
};

export type StoreUpdateOneRequiredWithoutCustomerNestedInput = {
  connect?: InputMaybe<StoreWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StoreCreateOrConnectWithoutCustomerInput>;
  create?: InputMaybe<StoreCreateWithoutCustomerInput>;
  update?: InputMaybe<StoreUpdateToOneWithWhereWithoutCustomerInput>;
  upsert?: InputMaybe<StoreUpsertWithoutCustomerInput>;
};

export type StoreUpdateOneRequiredWithoutInventoryNestedInput = {
  connect?: InputMaybe<StoreWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StoreCreateOrConnectWithoutInventoryInput>;
  create?: InputMaybe<StoreCreateWithoutInventoryInput>;
  update?: InputMaybe<StoreUpdateToOneWithWhereWithoutInventoryInput>;
  upsert?: InputMaybe<StoreUpsertWithoutInventoryInput>;
};

export type StoreUpdateOneRequiredWithoutStaff_Staff_Store_IdTostoreNestedInput = {
  connect?: InputMaybe<StoreWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StoreCreateOrConnectWithoutStaff_Staff_Store_IdTostoreInput>;
  create?: InputMaybe<StoreCreateWithoutStaff_Staff_Store_IdTostoreInput>;
  update?: InputMaybe<StoreUpdateToOneWithWhereWithoutStaff_Staff_Store_IdTostoreInput>;
  upsert?: InputMaybe<StoreUpsertWithoutStaff_Staff_Store_IdTostoreInput>;
};

export type StoreUpdateOneWithoutStaff_Store_Manager_Staff_IdTostaffNestedInput = {
  connect?: InputMaybe<StoreWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StoreCreateOrConnectWithoutStaff_Store_Manager_Staff_IdTostaffInput>;
  create?: InputMaybe<StoreCreateWithoutStaff_Store_Manager_Staff_IdTostaffInput>;
  delete?: InputMaybe<StoreWhereInput>;
  disconnect?: InputMaybe<StoreWhereInput>;
  update?: InputMaybe<StoreUpdateToOneWithWhereWithoutStaff_Store_Manager_Staff_IdTostaffInput>;
  upsert?: InputMaybe<StoreUpsertWithoutStaff_Store_Manager_Staff_IdTostaffInput>;
};

export type StoreUpdateToOneWithWhereWithoutCustomerInput = {
  data: StoreUpdateWithoutCustomerInput;
  where?: InputMaybe<StoreWhereInput>;
};

export type StoreUpdateToOneWithWhereWithoutInventoryInput = {
  data: StoreUpdateWithoutInventoryInput;
  where?: InputMaybe<StoreWhereInput>;
};

export type StoreUpdateToOneWithWhereWithoutStaff_Staff_Store_IdTostoreInput = {
  data: StoreUpdateWithoutStaff_Staff_Store_IdTostoreInput;
  where?: InputMaybe<StoreWhereInput>;
};

export type StoreUpdateToOneWithWhereWithoutStaff_Store_Manager_Staff_IdTostaffInput = {
  data: StoreUpdateWithoutStaff_Store_Manager_Staff_IdTostaffInput;
  where?: InputMaybe<StoreWhereInput>;
};

export type StoreUpdateWithWhereUniqueWithoutAddressInput = {
  data: StoreUpdateWithoutAddressInput;
  where: StoreWhereUniqueInput;
};

export type StoreUpdateWithoutAddressInput = {
  customer?: InputMaybe<CustomerUpdateManyWithoutStoreNestedInput>;
  inventory?: InputMaybe<InventoryUpdateManyWithoutStoreNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  staff_staff_store_idTostore?: InputMaybe<StaffUpdateManyWithoutStore_Staff_Store_IdTostoreNestedInput>;
  staff_store_manager_staff_idTostaff?: InputMaybe<StaffUpdateOneRequiredWithoutStore_Store_Manager_Staff_IdTostaffNestedInput>;
};

export type StoreUpdateWithoutCustomerInput = {
  address?: InputMaybe<AddressUpdateOneRequiredWithoutStoreNestedInput>;
  inventory?: InputMaybe<InventoryUpdateManyWithoutStoreNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  staff_staff_store_idTostore?: InputMaybe<StaffUpdateManyWithoutStore_Staff_Store_IdTostoreNestedInput>;
  staff_store_manager_staff_idTostaff?: InputMaybe<StaffUpdateOneRequiredWithoutStore_Store_Manager_Staff_IdTostaffNestedInput>;
};

export type StoreUpdateWithoutInventoryInput = {
  address?: InputMaybe<AddressUpdateOneRequiredWithoutStoreNestedInput>;
  customer?: InputMaybe<CustomerUpdateManyWithoutStoreNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  staff_staff_store_idTostore?: InputMaybe<StaffUpdateManyWithoutStore_Staff_Store_IdTostoreNestedInput>;
  staff_store_manager_staff_idTostaff?: InputMaybe<StaffUpdateOneRequiredWithoutStore_Store_Manager_Staff_IdTostaffNestedInput>;
};

export type StoreUpdateWithoutStaff_Staff_Store_IdTostoreInput = {
  address?: InputMaybe<AddressUpdateOneRequiredWithoutStoreNestedInput>;
  customer?: InputMaybe<CustomerUpdateManyWithoutStoreNestedInput>;
  inventory?: InputMaybe<InventoryUpdateManyWithoutStoreNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  staff_store_manager_staff_idTostaff?: InputMaybe<StaffUpdateOneRequiredWithoutStore_Store_Manager_Staff_IdTostaffNestedInput>;
};

export type StoreUpdateWithoutStaff_Store_Manager_Staff_IdTostaffInput = {
  address?: InputMaybe<AddressUpdateOneRequiredWithoutStoreNestedInput>;
  customer?: InputMaybe<CustomerUpdateManyWithoutStoreNestedInput>;
  inventory?: InputMaybe<InventoryUpdateManyWithoutStoreNestedInput>;
  last_update?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  staff_staff_store_idTostore?: InputMaybe<StaffUpdateManyWithoutStore_Staff_Store_IdTostoreNestedInput>;
};

export type StoreUpsertWithWhereUniqueWithoutAddressInput = {
  create: StoreCreateWithoutAddressInput;
  update: StoreUpdateWithoutAddressInput;
  where: StoreWhereUniqueInput;
};

export type StoreUpsertWithoutCustomerInput = {
  create: StoreCreateWithoutCustomerInput;
  update: StoreUpdateWithoutCustomerInput;
  where?: InputMaybe<StoreWhereInput>;
};

export type StoreUpsertWithoutInventoryInput = {
  create: StoreCreateWithoutInventoryInput;
  update: StoreUpdateWithoutInventoryInput;
  where?: InputMaybe<StoreWhereInput>;
};

export type StoreUpsertWithoutStaff_Staff_Store_IdTostoreInput = {
  create: StoreCreateWithoutStaff_Staff_Store_IdTostoreInput;
  update: StoreUpdateWithoutStaff_Staff_Store_IdTostoreInput;
  where?: InputMaybe<StoreWhereInput>;
};

export type StoreUpsertWithoutStaff_Store_Manager_Staff_IdTostaffInput = {
  create: StoreCreateWithoutStaff_Store_Manager_Staff_IdTostaffInput;
  update: StoreUpdateWithoutStaff_Store_Manager_Staff_IdTostaffInput;
  where?: InputMaybe<StoreWhereInput>;
};

export type StoreWhereInput = {
  AND?: InputMaybe<Array<StoreWhereInput>>;
  NOT?: InputMaybe<Array<StoreWhereInput>>;
  OR?: InputMaybe<Array<StoreWhereInput>>;
  address?: InputMaybe<AddressRelationFilter>;
  address_id?: InputMaybe<IntFilter>;
  customer?: InputMaybe<CustomerListRelationFilter>;
  inventory?: InputMaybe<InventoryListRelationFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  manager_staff_id?: InputMaybe<IntFilter>;
  staff_staff_store_idTostore?: InputMaybe<StaffListRelationFilter>;
  staff_store_manager_staff_idTostaff?: InputMaybe<StaffRelationFilter>;
  store_id?: InputMaybe<IntFilter>;
};

export type StoreWhereUniqueInput = {
  AND?: InputMaybe<Array<StoreWhereInput>>;
  NOT?: InputMaybe<Array<StoreWhereInput>>;
  OR?: InputMaybe<Array<StoreWhereInput>>;
  address?: InputMaybe<AddressRelationFilter>;
  address_id?: InputMaybe<IntFilter>;
  customer?: InputMaybe<CustomerListRelationFilter>;
  inventory?: InputMaybe<InventoryListRelationFilter>;
  last_update?: InputMaybe<DateTimeFilter>;
  manager_staff_id?: InputMaybe<Scalars['Int']['input']>;
  staff_staff_store_idTostore?: InputMaybe<StaffListRelationFilter>;
  staff_store_manager_staff_idTostaff?: InputMaybe<StaffRelationFilter>;
  store_id?: InputMaybe<Scalars['Int']['input']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Film_ActorActor_IdFilm_IdCompoundUniqueInput = {
  actor_id: Scalars['Int']['input'];
  film_id: Scalars['Int']['input'];
};

export type Film_CategoryFilm_IdCategory_IdCompoundUniqueInput = {
  category_id: Scalars['Int']['input'];
  film_id: Scalars['Int']['input'];
};

export enum Film_Rating {
  G = 'G',
  Nc_17 = 'NC_17',
  Pg = 'PG',
  Pg_13 = 'PG_13',
  R = 'R'
}

export type RentalRental_DateInventory_IdCustomer_IdCompoundUniqueInput = {
  customer_id: Scalars['Int']['input'];
  inventory_id: Scalars['Int']['input'];
  rental_date: Scalars['DateTimeISO']['input'];
};

export type GetFilmActorInfoQueryVariables = Exact<{
  filmId: Scalars['Int']['input'];
}>;


export type GetFilmActorInfoQuery = { __typename?: 'Query', films: Array<{ __typename?: 'Film', description?: string | null, film_id: number, title: string, film_actor: Array<{ __typename?: 'Film_actor', film_id: number, actor_id: number, actor: { __typename?: 'Actor', actor_id: number, first_name: string, last_name: string } }> }> };

export type GetActorQueryVariables = Exact<{
  actorId: Scalars['Int']['input'];
}>;


export type GetActorQuery = { __typename?: 'Query', actor?: { __typename?: 'Actor', actor_id: number, first_name: string, last_name: string } | null };


export const GetFilmActorInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFilmActorInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filmId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"films"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"film_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"IntValue","value":"1"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"film_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"film_actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"film_id"}},{"kind":"Field","name":{"kind":"Name","value":"actor_id"}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actor_id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetFilmActorInfoQuery, GetFilmActorInfoQueryVariables>;
export const GetActorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getActor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"actorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"actor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"actorId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actor_id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}}]}}]}}]} as unknown as DocumentNode<GetActorQuery, GetActorQueryVariables>;