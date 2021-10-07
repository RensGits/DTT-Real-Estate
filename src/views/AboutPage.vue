<template>
  <div>
      <div id = 'aboutPageContainer'>
        <div class = 'pageTitleContainer' >
            <h1>About</h1>
        </div>

        <section>
            <p>
                This web application was build in Vue.js as part of the Front-end development traineeship 
                application at DTT. With this web application, I hope to demonstrate my knowledge of Vue.js. 
            </p>
        </section>

        <section>
            <h2 class = 'sectionTitle'>The assignment</h2>
            <p>
                The challenge goes as follows: Create a web application for house listings, which allows the 
                user to view a list of houses that are currently available for sale, and create, edit and delete their own listings. 
                The data of the current houses listed is retrieved from an API and new listings are posted to this API. All the specific requirements are listed below.
            </p>
            
            <br/>
            <div id = 'userStories' ref ='userStories' @scroll="handleScoll" >
                <div id = 'customScrollIndicator'>
                    <div :style="{'height':scrollProgress + '%', 'background-color': 'rgb(235,84,64)'}" id = 'customScrollIndicatorProgress'></div>
                </div>
                <h2>A minimal viable product contains the folowing functionality: </h2>
                <h4>User story 1: As a user, I want to be able to see a fixed navigation header, so that I can easily navigate through the app.</h4>
                <ul>
                    <li>I want to be able to navigate to the ‘Houses’ page.</li>
                    <li>I want to be able to see what page is currently active.</li>
                </ul>

                <h4>
                User story 2: As a user, I want to be able to see an overview of all available houses within the homepage of the web app, 
                so that I can see what the app has to offer. 
                </h4>
                <ul>
                    <li>I want to be able to see the address, postal code and city of the listing.</li>
                    <li>I want to be able to see the image, size, the number of bedrooms and bathrooms of the listing.</li>
                </ul>

                <h4>User story 4: As a user, I want to be able to search through the available houses by at least
                    one of the house listing properties, so that I can find specific houses based on search
                    criteria.
                </h4>
                <ul>
                    <li>I want to be able to clear my search input, after I start typing.</li>
                    <li> I want to be able to see a result indication, informing me about the number of
                        results that are found.</li>
                    <li>I want to be able to see if my search input did not match any results.</li>
                </ul>

                <h4>User story 4: As a user, I want to be able to sort the available houses shown on the
                    ‘Homepage’ by at least one option (price or size), so that I can sort based on my
                    preference. 
                </h4>

                <h4>User story 5: As a user, I want to be able to access the details of a house, so that I can read
                    more in-depth information about my selected house.
                </h4>
                <ul>
                    <li>I want to be able to see the address, postal code and city of the listing.</li>
                    <li>I want to be able to see the description, image, number of bedrooms and
                        bathrooms, the size, construction and if the listing has a garage or not.</li>
                    <li>If it is my own listing, I want to be able to delete and edit the listing.</li>
                </ul>

                <h4>User story 6: As a user, I want to be able to create my listing(s), by completing all the
                    required fields in a form.
                </h4>

                <ul>
                    <li>I want to be able to add the address (street name, House number, Addition, Postal
                        Code and City) of my listing.</li>
                    <li>I want to be able to set an image, a description, a price, the size, the amount of
                        bedrooms and bathrooms, the construction date whether my listing has a garage
                        or not.</li>
                    <li>If I have not completed all the required fields or there is a validation error in the
                        form, I should see an appropriate error message.</li>
                    <li>After completing the form and creating the listing, I should be redirected to the
                        newly created listing detail page.</li>
                </ul>

                <h4>User story 7: As the owner of a listing, I want to be able to have an edit and delete button
                    on the detail page of a house that I own, so that I can navigate to the edit page of my
                    listing or delete the listing.
                </h4>

                <h4>User story 8: As the owner of a listing, I want to be able to edit my listing(s)</h4>
                
                <ul>
                    <li>I want to be able to edit the address (street name, House number, Addition, Postal
                        Code and City) of my listing.</li>
                    <li>I want to be able to edit the image, description, price, size, amount of bedrooms
                        and bathrooms, the construction date and whether my listing has a garage or
                        not.</li>
                    <li>If I have not completed all the required fields or there is a validation error in the
                        form, I want to be informed with an appropriate error message.
                    </li>
                </ul>

                <h4>User story 9: As the owner of a listing, I want to be able to delete my listing(s).</h4>
                <ul>
                    <li>I want to see a warning before the successful deletion of my listing.</li>
                </ul>
                
            </div>
        </section>

        <section>
            <h2 class = 'sectionTitle'>Extras</h2>
            <p>Here follows a list of things that I added on top of the minimal requirements:</p>
            <ul>
                <li>The ability to add listings as favorite. This can be done from the overview page and can then be viewed (and removed) on the My listings page.</li>
                <li>Added an overview of the users current listings on the My listings page.</li>
                <li>Search filters on street name, zip code, city and size.</li>
                <li>Included both the price and size sorting mechanism, including the ability to set these to ascending or descending.</li>
                <li>Responsive design for everything between browser & phone.</li>
                <li>Custom scrollbar (scroll progress indicator).</li>
                <li>This About page.</li>
            </ul>
        </section>

        <section>
            <h2 class = 'sectionTitle'>Extras</h2>
            <p>Some other design choices worth mentioning:</p>
            <ul>
             
                <li>The searchbar automatically retrieves all results on deleting the current search input, not only by pressing the clear icon, but any other way possible.</li>
                <li>The create new listing form (or when editing an existing one) checks, on top if a required field is filled in, if a numeric value is entered where one is needed. </li>
                <li>On screen width sizes smaller then 330px, the overview tiles on the overview page show just the adress, price and size to keep things clear at those small sizes.</li>
                <li>At the price and size inputfield of the listing form, I chose to let the user fill in just numbers, and show a euro symbol or m2 unit in the list itself. I think this provides a more clear 
                    expectation of the user and less filtering down the line.</li>
                <li>I chose to not use the px measurements from the stylesheet but rather eyeballed it and used rems to size most of the text and elements, as the given font measurements 
                    didn't seem to reproduce the design shown in the workflow (probably my mistake). </li>
            </ul>
        </section>

        
        
      </div>
      <div class = 'spacer'></div>
  </div>
</template>


<script>



export default {
    
    data(){
        return{
            showParagraph: false,
            scrollProgress: '10%'
            
        }
    },

    methods:{
        toggleParagraph(){
            this.showParagraph = !this.showParagraph
        },
        handleScroll() {                                                            // sets scrollProgress to the relative scrollheight to the container
           
            const progress = this.$refs.userStories.scrollTop / 
                (this.$refs.userStories.scrollHeight - 
                this.$refs.userStories.clientHeight) * 100
            this.scrollProgress = progress
        }
        
    },

    mounted() {                                                                     // adds scroll event listener
        this.$refs.userStories.addEventListener('scroll', this.handleScroll); 
    },

    beforeDestroyed(){
        this.$refs.userStories.removeEventListener('scroll', this.handleScroll);    // removes scroll event listener
    }

  
    

}

</script>


<style scoped>

a{
    font-size: 0.9rem;
    font-weight: 600;
}

#aboutPageContainer{
    width: 100%;
    padding: 0 2.5%
}

#userStories{
    background-color: rgb(237, 237, 237);
    padding: 2rem;
    height: 30rem;
    width: 100%;
    overflow: scroll;
}

#userStories::-webkit-scrollbar {
    display: none;
}


#customScrollIndicator{
    position: absolute;
    right: 21%;
    margin-top: -2rem;
    height: 30rem;
    width: 0.7rem;
    background-color: gray;
}



@media only screen and (max-width: 990px) {
    #customScrollIndicator{
        right: 12%;
    }
}


@media only screen and (max-width: 768px) {
    #customScrollIndicator{
        right: 2%;
    }
}




</style>