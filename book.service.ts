import { Injectable } from '@nestjs/common';
import { Book, CreateBookInput } from './entities/book.entity';
import { UpdateBookInput } from './entities/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class BookService {
  constructor(@InjectRepository(Book) public readonly bookRepo:Repository<Book> ){}

  async findAllBooks():Promise<Book[]> {
    let books = await this.bookRepo.find()
    return books;
  }

  async findOne(id: number):Promise<Book> {
    let book = await this.bookRepo.findOne({ where: { id } })
    return book;
  }

  async create(createBookInput: CreateBookInput) {
    let book :Book= new Book();
    book.title=createBookInput.title;
    book.price=createBookInput.price; 
    await this.bookRepo.save(book)  
  }


  async createArrayofBooks() {
    console.log("called"); 
    const books = [
      {
        title: "Book Title 1",
        price: 12,
      },
      {
        title: "Book Title 2",
        price: 13,
      },
      {
        title: "Book Title 3",
        price: 14,
      }
    ]
    console.log(books);
    

    await this.bookRepo.save(books)
    
  }

  async update(id: number, updateBookInput: UpdateBookInput) {

   console.log(id,updateBookInput);
   
  }

  

  async remove(id: number) {
    return this.bookRepo.delete(id);
  }
}
