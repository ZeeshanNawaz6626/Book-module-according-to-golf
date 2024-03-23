import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './entities/book.entity';
import { UpdateBookInput } from './entities/book.entity';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}



  @Query(() => [Book], { name: 'findAllbook' })
  findAll() {
    return this.bookService.findAllBooks();
  }

  @Query(() => Book, { name: 'findbookbyid' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.findOne(id);
  }

  @Mutation(() => Book,{ name: 'CreateBook' })
  createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.bookService.create(createBookInput);
  }

  @Mutation(() => Book,{ name: 'Updatebookbyid' })
  updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.bookService.update(updateBookInput.id, updateBookInput);
  }

  @Mutation(() => Book,{ name: 'Removebookbyid' })
  removeBook(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.remove(id);
  }

  @Mutation(() => Book,{ name: 'CreateArrayofBooks' })
  createArrayofBooks() {
    return this.bookService.createArrayofBooks();
  }
}
