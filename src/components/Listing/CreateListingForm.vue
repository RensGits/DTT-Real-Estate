<template>
    <h1>Create new listing</h1>
    <form class = 'form'>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="streetName">Street name*</label>
            <input class = 'inputField' type="text" >
        </div>
        <div class = 'inputFieldContainerWrapper'>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="houseNumber">House number*</label>
                <input class = 'inputField' type="text">
            </div>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="addition">Addition (optional)</label>
                <input class = 'inputField' type="text">
            </div>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="postalCode">Postal Code*</label>
            <input class = 'inputField' type="text">
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="City">City</label>
            <input class = 'inputField' type="text">
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="uploadPicutre">Upload picture (PNG or JPG)*</label>
            
            <input class = 'uploadPictureBox' value = '+' type="file" id="img" name="img" accept="image/*"/>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="price">Price*</label>
            <input class = 'inputField' type="text">
        </div>
         <div class = 'inputFieldContainerWrapper'>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="size">Size*</label>
                <input class = 'inputField' type="text">
            </div>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="garage">Garage*</label>
                <input class = 'inputField' type="text">
            </div>
        </div>
        <div class = 'inputFieldContainerWrapper'>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="bedrooms">BedRooms*</label>
                <input class = 'inputField' type="text">
            </div>
            <div class = 'inputFieldContainer'>
                <label class = 'inputFieldHeader' for="bathrooms">Bathrooms*</label>
                <input class = 'inputField' type="text">
            </div>
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="constructionDate">Construction date*</label>
            <input class = 'inputField' type="text">
        </div>
        <div class = 'inputFieldContainer'>
            <label class = 'inputFieldHeader' for="description">Description*</label>
            <input class = 'inputField' type="text">
        </div>
        <input class = 'postButton' type = 'submit' value = 'POST'>
        
    </form>
</template>

<script>
export default {
  
}
</script>

<style>
     .form{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(4, 5rem) 12rem repeat(4, 5rem) 6rem;
        gap: 2rem;
        width: 25rem;
      
    }
    .inputField{
        height: 100%;
        background-color: white;
        border-style: none;
        border-radius: 6px;
        font-size: 0.8rem; 
    }

    .inputFieldContainer{
        display: flex;
        flex-direction: column;
        grid-column: 1/3;
        width: 100%;
    }

    .inputFieldContainerWrapper{
        display: flex;
        grid-column: 1/3;
        justify-content: space-between;
        width: 100%;
    }

    .inputFieldContainerWrapper > .inputFieldContainer{
        width: 48%;
    }

    .inputFieldHeader{
        font-weight: 500;
        margin-bottom: 0.5rem
    }

    .uploadPictureBox{
        display:none;
        display: grid;
        justify-content: center;
        align-items: center;
        width: 8rem;
        height: 8rem;
        border-style:dashed;
        border-color: darkgray;
        border-width: 2px;
        border-spacing: 60px;
        font-size: 4rem;
        font-weight: 400;
        
    }

    .postButtonContainer{
        display: flex;
        width: 100%;
        justify-content:right;
    }

    .postButton{
        grid-column: 2;
        background-color: rgb(230,85,64);
        color: white;
        border-style: none;
        border-radius: 7px;
        font-size: 0.9rem;
        font-weight: 500;
        height: 2.4rem;
        width: 11rem;
    }


</style>