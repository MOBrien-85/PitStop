/* add in a state selector on the search? 
OR
have the state selector be part of the filter search results after the fact?
Yelp has a dual search bar. you can search for a business and/or a state, city, or zip
can or should i have that? you can do both or either. you can type in "exit 30" or maybe just "30". the results would 
spit out all exit 30s. no matter the interstate. 
so maybe if i can do a dual search bar like yelp i could put in interstate and exit. you can search both or either.

i'll need to create a new component with a search module
*/

export const ExitSearch = ({ setterFunction }) => {
    return (
        <div>
            <input 
                onChange={
                    (changeEvent) => {
                        setterFunction(changeEvent.target.value)
                    }
                }   
            type="text" placeholder="Which Exit?" />
            
        </div>
    )
}