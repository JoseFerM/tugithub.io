
document.addEventListener('DOMContentLoaded', function() {
    
    console.log(' JavaScript conectado correctamente');
    const formulario = document.getElementById('contactForm');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    
    if (!formulario) {
        console.error(' No encontré el formulario con id="contactForm"');
        return;
    }
    console.log(' Formulario encontrado');
    
    nombre.addEventListener('input', function() {
        if (this.value.length < 3) {
            this.style.border = '2px solid red';
            mostrarMensajeError('nombre', ' Mínimo 3 caracteres');
        } else {
            this.style.border = '2px solid green';
            ocultarMensajeError('nombre');
        }
    });
     
    email.addEventListener('input', function() {
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailValido.test(this.value)) {
            this.style.border = '2px solid red';
            mostrarMensajeError('email', '  Email inválido');
        } else {
            this.style.border = '2px solid green';
            ocultarMensajeError('email');
        }
    });
     
    mensaje.addEventListener('input', function() {
        if (this.value.length < 10) {
            this.style.border = '2px solid red';
            mostrarMensajeError('mensaje', '  Mínimo 10 caracteres');
        } else {
            this.style.border = '2px solid green';
            ocultarMensajeError('mensaje');
        }
    });
     
    function mostrarMensajeError(campo, texto) {
        let errorDiv = document.getElementById('error-' + campo);
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.id = 'error-' + campo;
            errorDiv.style.color = 'red';
            errorDiv.style.fontSize = '12px';
            errorDiv.style.marginTop = '5px';
            document.getElementById(campo).parentNode.appendChild(errorDiv);
        }
        errorDiv.textContent = texto;
    }
    
    function ocultarMensajeError(campo) {
        let errorDiv = document.getElementById('error-' + campo);
        if (errorDiv) {
            errorDiv.textContent = '';
        }
    }
    
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Formulario enviado');
    
        if (nombre.value.length < 3) {
            alert('El nombre debe tener al menos 3 caracteres');
            nombre.focus();
            return;
        }
        
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailValido.test(email.value)) {
            alert('Email inválido');
            email.focus();
            return;
        }
        
        if (mensaje.value.length < 10) {
            alert('El mensaje debe tener al menos 10 caracteres');
            mensaje.focus();
            return;
        }
         
        const texto = `Hola!%0A%0A*Nombre:* ${nombre.value}%0A*Email:* ${email.value}%0A%0A*Mensaje:*%0A${mensaje.value}`;
        const url = `https://wa.me/59169914503?text=${texto}`; 
        
        window.open(url, '_blank');
        
        const noti = document.getElementById('notificacion');
        if (noti) {
            noti.textContent = '✅ Mensaje enviado a WhatsApp';
            noti.style.padding = '10px';
            noti.style.backgroundColor = '#d4edda';
            noti.style.color = '#155724';
            noti.style.borderRadius = '5px';
            noti.style.marginTop = '10px';
        }
    });
});