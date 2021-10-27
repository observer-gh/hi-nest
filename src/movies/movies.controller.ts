import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll():string{
        return "returns all movies";
    }

    @Get("/search")
    search(@Query("year") year:string) {
        return `whateva ${year}`
    };

    @Get("/:id")
    getOne(@Param("id") id:string ){
        return `return 1 movie w/ given ${id}`;
    }

    

    @Post()
    createMovie(@Body() movieData) {
        console.log(movieData);
        return `creates movies i guess`;
    }

    @Delete("/:id")
    deleteMovie(@Param("id") movieID:string){
        return `deletes movies w/ ${movieID}`;
    }

    @Patch("/:id")
    patchMovie(@Param("id") movieID:string, @Body() updateData){
        return {
            updatedMovie: movieID,
            ...updateData,
        };
    }
}
