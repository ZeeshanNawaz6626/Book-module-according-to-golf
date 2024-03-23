import { ObjectType, Field, Int, InputType, PartialType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity({name:"book"})
@ObjectType()
export class Book {
  
  @PrimaryGeneratedColumn()
  @Field(() => Int,{ nullable: true })
  id: number;

  @Field({ nullable: true })
  @Column()
  title: string;

  @Field({ nullable: true })
  @Column()
  price: number;
}



@InputType()
export class CreateBookInput {
  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  price: number;
}

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Field(() => Int)
  id: number;
}
