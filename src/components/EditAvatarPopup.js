import React from 'react';
import PopupWithForm from './PopupWithForm';


function EditAvatartPopup(props){
const avavtarUrl = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar(avavtarUrl.current.value);
    } 

    React.useEffect(
        ()=>{
            document.getElementById('profile-img-input').value='';
        },[props.isOpen]
    );

    function clearInputs(){
        document.getElementById('profile-img-input').value='';
    }

    return (            
        <PopupWithForm 
            title="Обновить аватар" 
            name="new-avatar" 
            isOpen={props.isOpen} 
            onSubmit={handleSubmit}
            onClose={props.onClose} 
            buttonText="Сохранить">
            {/* <!-- поле ввода url-адреса картинки --> */}
            <input 
                id="profile-img-input" name="link" 
                className="popup__input popup__input_error"
                type="url" placeholder="Ссылка на картинку" required
                ref={avavtarUrl} 
            />
            {/* <!-- подпись с ошибкой заполнения url-адреса  --> */}
            <span id="profile-img-input-error" className="popup__input-error">ошибка заполнения</span>
        </PopupWithForm>
    )

}

export default EditAvatartPopup;