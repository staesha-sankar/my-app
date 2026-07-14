ctrl + ~ => open/hide the terminal

f2 rename

//useNavigate
useNavigate: use it when you want to change url programmatically
eg Payment yes or no -> if successful takes you to order page if not takes you to payment
No user interaction must do it automatically


navigate("about") - route
naviagte(-1) - go back
navigate (1) - goes forward

eg if you want to go 3 pages back navgiate(-3)


//useParams - gives object then you can destructure
Get a parameter from a url

path="/about":id



//Types of components
1. class
2. function -> less work to get the same result/ improve dx/ can only use hooks

life cycle of component
1. initialisation  - setup props and state
2. mounting - tree makes it visible to user (willMount-will run the code attached basically return statement - render JSX parts  - after mounting react will run didMount will run the fetch code (callback equivalent))
3. updation - props and state due to rerendering occuring. React checks should i update the component
4. unmounting - changing a page and condiitonal rendering

usEffect(callback), [] -> when mount is complete callback is called once
useEffect() -> callback called everytime
useEffect(),[dependency] -> you control when the call back is called


Movie App Notes
App
│
├── Navigation
│
├── MovieList page
│     └── Movie cards
│           └── MovieCounter
│
├── AddMovie page
│
└── MovieDetails page


## SQL Lesson 1: SELECT queries 101
1. Find the title of each film
   ```sql  
    SELECT title 
    FROM movies;
    ```
   

2. Find the director of each film
    ```sql
    SELECT title 
    FROM movies;
    ```

3. Find the title and director of each film
    ```sql
    SELECT title, director
    FROM movies;
    ```
4. Find the title and year of each film
   ```sql
    SELECT title, year
    FROM movies;
    ```
5. Find all the information about each film
    ```sql
    SELECT title, director
    FROM movies;
    ```


## SQL Lesson 2: SELECT queries 101
1. Find the movie with a row id of 6
   ```sql
   SELECT *
   FROM movies 
   WHERE id = 6;
   ```

2. Find the movies released in the years between 2000 and 2010
   ```sql
   SELECT * 
   FROM movies 
   WHERE Year BETWEEN 2000 AND 2010;
   ```

3. Find the movies not released in the years between 2000 and 2010
   ```sql
   SELECT * 
   FROM movies 
   WHERE Year NOT BETWEEN 2000 AND 2010;
   ```

4. Find the first 5 Pixar movies and their release year
   ```sql
   SELECT title, year 
   FROM movies 
   ORDER BY Year ASC
   LIMIT 5;

   Select title From movies WHERE id < 6;
   ```

## SQL Lesson 3: SELECT queries 101
1. Find all the Toy Story movies
   ```sql
   SELECT * FROM movies WHERE title LIKE "%Toy Story%";
   ```

2. Find all the movies directed by John Lasseter
   ```sql
   SELECT * FROM movies WHERE director = "John Lasseter";
   ```

3. Find all the movies (and director) not directed by John Lasseter
   ```sql
   SELECT title, director FROM movies WHERE director NOT LIKE "John Lasseter";
   ```

4. Find all the WALL-* movies
   ```sql
   SELECT * FROM movies WHERE title LIKE "%WALL-%";
   ```

   ## SQL Lesson 4: SELECT queries 101
1. List all directors of Pixar movies (alphabetically), without duplicates
   ```sql
   SELECT DISTINCT director FROM movies ORDER BY director ASC;
   ```
2. List the last four Pixar movies released (ordered from most recent to least)
   ```sql
   SELECT title FROM movies ORDER BY year DESC LIMIT 4;

3. List the first five Pixar movies sorted alphabetically
   ```sql
   SELECT title FROM movies ORDER BY title ASC LIMIT 5;

4. List the next five Pixar movies sorted alphabetically
   ```sql
   SELECT title FROM movies ORDER BY title ASC LIMIT 5 OFFSET 5;


## SQL Lesson 5: SELECT queries 101

1. List all the Canadian cities and their populations 
   ```sql
   SELECT city, population FROM north_american_cities where country = "Canada"  ;

2. Order all the cities in the United States by their latitude from north to south
    ```sql
        SELECT * FROM north_american_cities WHERE Country = "United States" ORDER BY Latitude DESC;

3. Order all the cities in the United States by their latitude from north to south
    ```sql
        SELECT * FROM north_american_cities  WHERE Longitude < -87.629798 ORDER BY Longitude ASC;

4.  List the two largest cities in Mexico (by population)     
    ```sql
        SELECT city, population FROM north_american_cities WHERE country = "Mexico" ORDER BY Population DESC LIMIT 2

5. List the third and fourth largest cities (by population) in the United States and their population 
    ```sql
        SELECT city, population FROM north_american_cities WHERE country = "United States" ORDER BY Population DESC LIMIT 2 OFFSET 2



## Normalisation

1NF
1) Using row order to convey info -> add another column
2) Mixing data types within the same column
3) Having a table without a PK is not allowed (Unique, not null, 1PK per table)
4) Repeating groups are not permitted (3 shields, 5 arrows etc)

## 2NF
Non-key depend on primary key

## 3NF
Non-key must not depend on another non-key


## SQL Lesson 6: SELECT queries 101
1. Find the domestic and international sales for each movie
   ```sql
   SELECT * FROM movies as m 
   INNER JOIN BoxOffice as b
   on m.id = b.movie_id;

2. Show the sales numbers for each movie that did better internationally rather than domestically
   ```sql
   SELECT * FROM movies as m 
   INNER JOIN BoxOffice as b
   on m.id = b.movie_id
   WHERE International_sales > domestic_sales;

3. List all the movies by their ratings in descending order
   ```sql
   SELECT * FROM movies as m 
   INNER JOIN BoxOffice as b
   on m.id = b.movie_id
   Order BY Rating DESC;

## SQL Lesson 7: SELECT queries 101
1. Find the list of all buildings that have employees
   ```sql
   SELECT DISTINCT building FROM employees 

2. Find the list of all buildings and their capacity
   ```sql
   SELECT  building_name, capacity FROM Buildings

3. List all buildings and the distinct employee roles in each building (including empty buildings)
   ```sql
   SELECT  DISTINCT b.building_name, e.role FROM Buildings as b
   LEFT JOIN Employees as e
   ON b.building_name = e.building;
   ```
## SQL Lesson 8: SELECT queries 101
1. Find the name and role of all employees who have not been assigned to a building 
   ```SQL
   SELECT Name, Role FROM employees WHERE Building is NULL
   ```

2. Find the names of the buildings that hold no employees
   ```sql
   SELECT *
   FROM BUILDINGS AS B 
   LEFT JOIN EMPLOYEES AS E
   ON B.BUILDING_NAME = E.BUILDING
   WHERE E.BUILDING IS NULL
   ```

## SQL Lesson 9: SELECT queries 101
1. List all movies and their combined sales in millions of dollars
```sql
   SELECT m.title,
   (b.domestic_sales + b.international_sales) /100000 as Total_Sales
   FROM movies as m
   INNER JOIN Boxoffice as b
   ON m.id = b.movie_id
```
2. 
   
