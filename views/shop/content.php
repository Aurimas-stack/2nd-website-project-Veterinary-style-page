<section class='hero'>
    <div class='container flex-container'>
        <div class='flex-cotainer form-container'>
            <h1>Add items</h1>
            <form method="post" action='shop.php' enctype='multipart/form-data' class='flex-container' id='uploadForm'>
                <div class='flex-container'>
                    <span class='file-name'>Choose a picture to upload</span>
                    <label for="file-upload" class='file-style'>
                        Browse
                        <input type='file' id='file-upload' name='upload' required/>
                    </label>
                    <textarea id='title'rows="2" name="title" placeholder="Add only the unique title for the photo..." type='text' required></textarea>
                    <textarea id='description'rows="4" name="photo_description" placeholder="Describe the photo..." type='text' required></textarea>
                    <input id='price' name='price' placeholder='Place the price...' type='number' size='6' step='.01' required />            
                </div>
                <input type='submit' name='submit' value='Upload' />
            </form>
        </div>
        <div class='flex-container form-container'>
            <h1>Remove items</h1>
            <form class='flex-container' id='remove-form' >
                <p>Select and Remove Item</p>
                <select id='selectOpt' name='title'>
                    <option value="" selected disabled hidden>Choose Title To Delete</option>   
                </select>
                <button id='rmvBtn' >Delete</button> 
            </form>
        </div>
        <div class='flex-container form-container'>
            <h1>Edit items</h1>
            <form class='flex-container' id='edit-form' >
                <p>Select and Edit Item</p>
                <select id='editOpt' name='title'>
                    <option value="" selected disabled hidden>Choose Title To Edit</option>   
                </select>
                <textarea id='edit-description'rows="4" name="edit_photo_description" placeholder="Type new photo description..." type='text' ></textarea>
                <input id='edit-price' name='edit_price' placeholder='Type the new price...' type='number' size='6' step='.01'  />            
                <button id='editBtn' >Edit</button> 
            </form>
        </div>
    </div>
</section>
<section class='products'>
    <h1><i class="fas fa-store"></i> This is our shop</h1>
    <div class='shop_sliders flex-container '>
        <div class='flex-container shop-slider' id='prevItem'>
            <a class="prevItems" >&#10094;</a>
            <p>Previous Items</p>
        </div>
        <p id='pageCounter'><span id='currP'></span> / <span id='maxP'></span></p>
        <div class='flex-container shop-slider' id='nextItem'>
            <p>Next Items</p>
            <a class="nextItems" >&#10095;</a>
        </div>
    </div>
    <ul id='pagin' class='flex-container'></ul>
    <div class='flex-container images'>
            <?php include_once 'shop_upload.php' ?>          
    </div>
</section>