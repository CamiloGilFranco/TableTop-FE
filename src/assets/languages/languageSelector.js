const languageSelector = (lang, str) => {
  const en = {
    headerRestaurant: "RESTAURANTS",
    searchBarTitle: "The Food You Love. Delivered With Care.",
    searchBarPlaceHolder: "What Are You Craving?.",
    searchBarButton: "Find a restaurant",
    flowInfoTitle: "Super Easy Booking",
    flowInfoCardOne: "Order Food Through Website or App",
    flowInfoCardTwo: "Users Receives Confirmation",
    flowInfoCardThree: "Order Processing & Food Preparation",
    flowInfoCardFour: "Food Is On Its Way To Deliver",
    popularRestaurantTitle: "Popular Restaurants",
    downloadPageTitle: "The best Food App",
    downloadPageCTA: "Download App Now...",
    footerAbout: "About",
    footerAboutUs: "About Us",
    footerFAQ: "FAQ",
    footerLogin: "Login",
    footerRegister: "Register",
    footerTC: "Terms & Co",
    footerPrivacy: "Privacy",
    footerSupport: "Support",
    footerLocation: "Our Location",
    footerLinks: "Useful Links",
    footerHome: "Home",
    footerVehicle: "Our Vehicle",
    footerVideo: "Latest Video",
    footerServices: "Services",
    footerBooking: "Booking Deal",
    footerEmergency: "Emergency Call",
    footerApp: "Mobile App",
    footerTopics: "New Topics",
    footerNews: "Recent News",
    signInTitle: "Register With",
    signInFormTitle: "or fill the form",
    signInEmail: "Email",
    signInEmailError: "* Write a valid Email",
    signInEmailConfirmation: "Confirm Email",
    signInEmailConfirmationError:
      "* Write the same Email as you did in the previous space",
    signInPassword: "Password",
    signInPasswordError:
      "* The password must contain at least one upper case letter, one lower case letter and one number and must be at least 8 characters long",
    signInPasswordConfirmation: "Confirm Password",
    signInPasswordConfirmationError:
      "* You must write the same password as you did in the previous space",
    signInFirstName: "First Name",
    signInFirstNameError:
      "* This field is required and must not contain any special characters or numbers",
    signInLastName: "Last Name",
    signInLastNameError: "* This field is required",
    signInId: "ID Document",
    signInIdCC: "Citizenship Card",
    signInIdCE: "Foreigner ID",
    signInIdPassport: "Passport",
    signInIdNumber: "ID Number",
    signInIdNumberError: "* Introduce a valid number",
    signInDoB: "Date of Birth",
    signInJan: "January",
    signInFeb: "February",
    signInMar: "March",
    signInApr: "April",
    signInMay: "May",
    signInJune: "June",
    signInJul: "July",
    signInAug: "August",
    signInSep: "September",
    signInOct: "October",
    signInNov: "November",
    signInDec: "December",
    signInCity: "City",
    signInAddress: "Address",
    signInAddressError: "* This field is required",
    signInPhone: "Phone Number",
    signInPhoneError: "* You must provide a valid phone number",
    signInTC: "I accept the Terms and Conditions of Use of the Portal.",
    signInTCError: "* You must agree to terms and conditions",
    signInPrivacy:
      "In compliance with the Personal Data Protection Regime, I expressly authorize TableTop, directly, or through designated third parties, to store, consult, process and in general, to treat the personal information you provide, and to be included in your databases, receive information from the Company, in accordance with the privacy and information management policies.",
    signInPrivacyError:
      "* You must accept the personal data processing policy.",
    signInSubcribe: "I authorize to receive information by",
    signInTextMessage: "SMS text messages (at no cost to the user)",
    signInWhatsApp: "WhatsApp messages",
    signInEmailSub: "Receive email notifications",
    signInButton: "Register!",
    signInSuccess:
      "User created successfully, you are being redirected to the home page now.",
    filterTitle: "Filters",
    filterCuisine: "Cuisine",
    filterClear: "clear filter",
    filterAsian: "Asian",
    filterFastFood: "Fast Food",
    filterItalian: "Italian",
    filterMexican: "Mexican",
    filterBreakfast: "Breakfast",
    filterTypical: "Typical",
    filterDessert: "Dessert",
    filterVeg: "Vegetarian",
    filterCoffee: "Coffee",
    filterRating: "Star Category",
    filterHelp: "Need Help",
    filterSchedule: "Monday to Friday",
    cardDishesFrom: "Dishes starting at",
    restaurantOptionsOnline: "ORDER ONLINE",
    restaurantOptionsOverview: "VENUES",
    restaurantOptionsGallery: "GALLERY",
    restaurantOptionsLocation: "LOCATION",
    restaurantOptionsBooking: "BOOK A TABLE",
    restaurantOptionsReview: "REVIEWS",
    overViewSchedule: "Opening Hours",
    overviewFacilities: "Facilities",
    bookingButton: "SUMBIT",
    recommendedTitle: "Recommended",
    cartTitle: "Cart Items",
    cartFinishWarning: "delivery charges may apply to your order.",
    cartPlaceOrder: "PLACE ORDER",
    orderSearch: "Search Dishes...",
    reviewBy: "By",
    alwaysFirstTitle: "Always First",
    alwaysFirstBody:
      "Be the first to find out the latest deals and exclusive offers and get 15% off your first order",
    alwaysFirstFooter: "Be The First",
    orderFailedTitle: "Oops! We Are Unable To Process Your Payment",
    orderFailedBody:
      "Looks Like We Encountered An Error. Please Try Again. If You Continue To Have Issues Try Another Payment Method",
    orderFailedFooter: "Try Again",
    orderSuccessTitle: "Payment Successful! Get Ready for Delicious Food.",
    orderSuccessBody:
      "Thank You For Your Payment. We Have Recieved Your Payment Succesfully. Your Transaction ID Is",
    orderSuccessBodyTwo: "You Will Get An Email Invoice Soon!",
    orderSuccessFooter: "Download Invoice",
    forgotPassTitle: "Recover your password",
    forgotPassButton: "Recover",
    forgotPassBack: "Back to log in",
    logInTitle: "Log In",
    logInSubtitle: "Log In with your registred user",
    logInRegister: "Not registered? Sign up here.",
    logInPass: "Password",
    logInFooter: "Forgot your password? Recover it it here.",
    restaurantAdminTitle: "Hi",
    restaurantAdminSubtitle: "Here's how your restaurant has been doing",
    restaurantAdminResTitle: "Restaurant name",
    restaurantAdminResSales: "The total amount of sales is",
    restaurantAdminResRating: "This is the rating for this restaurant",
    restaurantEditDetails: "Here you can edit or delete some information",
    restaurantEditAddress: "These are the addresses of your restaurant",
    restaurantEditPhoneNumber: "These are the phone numbers of your restaurant",
    restaurantReservationsTitle: "Here you can see the upcoming reservations",
    restaurantReservationsEdit:
      "If you want to delete something you can do it here",
    restaurantReservationsTime: "Time",
    restaurantReservationsDate: "Date",
    logOutText: "If you want to log out, click this button",
    logOutButton: "Log Out",
    editDetailsModal: "Here you can edit the address or phone",
    editDetailsError: "Enter a valid Phone Number or Address",
    save: "Save",
    cancel: "Cancel",
    editDishTitle: "Here you can edit the details of the dish",
    newDishFormTitle: "Do you want to add anything to your menu?",
    newDishFormName: "New dish name",
    newDishFormNameError:
      "* You must provide a title that is at least two characters long",
    newDishFormDescription: "New dish description",
    newDishFormDescriptionError:
      "* You must provide a description that is at least two characters long",
    newDishFormPrice: "New dish price",
    newDishFormPriceError: "* You must provide a price for this dish",
    newDishFormPriceErrorTwo: "* The price must be above 0",
    newDishFormCategory: "New dish Categorie",
    newDishFormCategoryLunch: "Lunch",
    newDishFormCategoryDrinks: "Drinks",
    newDishFormButton: "Create the new dish!",
    restaurantAdminMenuTitle: "This your menu",
    restaurantAdminMenuSubtitle:
      "If you want to delete something you can do it here",
    title: "Title",
    price: "Price",
    generalAdminSubtitle: "On this page you can remove or add restaurants",
    generalAdminList: "There currently are",
    generalAdminUserList: "Here you can see all the users",
    generalAdminIntro: 'Here you can change an existing user to an app admin, deactivate any user, create a new restaurant, and edit an existing restaurant.',
    generalAdminAddUserResAdmin: "Restaurant Admin",
    generalAdminAddUserGenAdmin: "General Admin",
    generalAdminAddUserRegUser: "Regular User",
    generalAdminAddUserButton: "Create the new User!",
    restaurantEditTitle: "Here you can edit the details of the Restaurant",
    newRestaurantFormTitle: "Do you want to add any new restaurant?",
    newRestaurantFormName: "New restaurant name",
    newRestaurantFormNameError:
      "* You must provide a name that is at least two characters long.",
    newRestaurantFormLocation: "New restaurant location",
    newRestaurantFormCategories: "Choose the categories of the new restaurant",
    newRestaurantFormCategoriesError:
      "* You must provide at least one category for the new restaurant.",
    newRestaurantFormButton: "Create the new restaurant!",
    generalAdminFullList: "This is a list of all the restaurants",
    generalAdminDelete: "If you want to delete something you can do it here",
    notFoundTitle: "Got lost looking for something?",
    notFoundBody: "It looks like the page you're looking for doesn't exist",
    notFoundFooter: "Go back to home",
    remove: "Remove",
    deliveryAddress: "Delivery Address",
    savedAddresses: "Saved Addresses",
    addAddress: "Add New Address",
    name: "Name",
    address: "Address",
    newAddressError: "* All fields are required",
    city: "City",
    addNewAddress: "ADD ADDRESS!",
    location: "VIEW IN GOOGLE MAPS",
    back: "Back",
    payment: "Payment",
    paymentDebitCard: "Debit Card",
    paymentCreditCard: "Credit Card",
    paymentCreditError: "* Enter a valid credit card number",
    paymentValidThrough: "Valid Through",
    paymentNameError: "* Enter the names as they are printed on the card",
    paymentDateError: "* Please enter a valid date",
    paymentCvvError: "* Enter the CVV code that is on the back of your card",
    number: "Number",
    paymentNumberError: "* Enter your identity document number",
    paymentMakePayment: "MAKE PAYMENT!",
    paymentCardNumber: "Card Number",
    paymentSelectBank: "Choose your bank",
    restaurantSearchNull: "No restaurants match your search criteria.",
    userAddressError: "Please enter a valir Address",
    userSubtitle: "Here you can see and edit your details",
    userSaveChanges: "Save Changes",
    signOut: "Sign Out",
    signOutText: "If you want to log out, click this button",
    generalError: "An error has ocurred, please try again.",
    logInSuccessfull: "You have logged in successfully!",
    userUpdatedMessage: "User updated successfully!",
    userUpdateFailedMessage:
      "Couldn't update the user, there's been an error, please try again.",
    userPage: "Go to the user page",
    logOutSuccess: "You've logged out successfully",
    restaurantAdminPage: "Administrate your restaurant",
    appAdminPage: "Administrate the plataform",,
    reviewsTitle: 'Leave your opinion',
    rating: 'Rating',
    reviewFormTitle: 'Title',
    reviewFormComments: 'Coments',
    commentsError: "* You must write your comments and they cannot have more than 255 characters",
    reviewsTitleError: "* You must write a title and it cannot have more than 40 characters",
    reviewStarsError: "* You must give a rating",
    newRestaurantLogoError: '* Logo is required',
    newRestaurantMainPhotoError: '* Main photo is required',
    mainPhoto: 'Main Photo',
    adminEmail: 'Restaurant Admin Email',
    adminEmailError: '* Valid admin email is required',
    usersFetchError: '* Error fetching users',
    updateUserError: 'Error updating user role',
    deavtivateUserWarning: 'Are you sure you want to deactivate this user? This action cannot be undone.',
    deactivatedUserSuccess: 'User deactivated successfully',
    deactivatedUserFailure: 'Error deactivating user',
    appAdminUserTitle: 'Here you can change a user role to an App admin,',
    appAdminUserWarning: 'Be careful, this person will have the ability to do major changes to the platform.',
    appAdminUserEmail: 'New App admin email',
    appAdminUserButton: 'Update User Role',
    role: 'Role',
    showUsers: 'Show Users',
    hideUsers: 'Hide Users',
    users: 'Users',
    restaurants: 'Restaurants',
    newRestaurantForm: 'Create new Restaurant',
    deavtivateRestaurantWarning: 'Are you sure you want to deactivate this restaurant? This action cannot be reversed.',
    deactivatedRestaurantSuccess: 'Restaurant deactivated successfully',
    deactivatedRestaurantFailure: 'Error deactivating Restaurant',
    generalAdminUserListDeactivate: 'If you want to deactivate any user, press the icon next to their name.',
    newResstaurantAdminEmail: 'New Restaurant Admin Email'
  };

  const es = {
    headerRestaurant: "RESTAURANTES",
    searchBarTitle: "La Comida Que Amas. Entregada Con Cariño.",
    searchBarPlaceHolder: "¿Que Se Te Antoja?.",
    searchBarButton: "Encuentra un restaurante",
    flowInfoTitle: "Reserva Súper Fácil",
    flowInfoCardOne: "Pide comida a través del sitio Web o la App",
    flowInfoCardTwo: "Los usuarios reciben confirmación",
    flowInfoCardThree: "Procesamiento de pedidos & preparación de la comida",
    flowInfoCardFour: "Tu pedido va en camino a ser entregado",
    popularRestaurantTitle: "Restaurantes Populares",
    downloadPageTitle: "La mejor App de comida",
    downloadPageCTA: "Descarga la App ahora...",
    footerAbout: "Acerca",
    footerAboutUs: "Acerca de nosotros",
    footerFAQ: "PQRS",
    footerLogin: "Inicia sesión",
    footerRegister: "Registrate",
    footerTC: "Terminos & Condiciones",
    footerPrivacy: "Privacidad",
    footerSupport: "Soporte",
    footerLocation: "Donde encontrarnos",
    footerLinks: "Links utiles",
    footerHome: "Pagina principal",
    footerVehicle: "Nuestro vehículo",
    footerVideo: "Video más reciente",
    footerServices: "Servicios",
    footerBooking: "Reserva una mesa",
    footerEmergency: "Número de emergencia",
    footerApp: "Aplicación Movil",
    footerTopics: "Temas nuevos",
    footerNews: "Noticias Recientes",
    signInTitle: "Registrate con",
    signInFormTitle: "o completa el formulario",
    signInEmail: "Correo electronico",
    signInEmailError: "* Escribe un correo valido",
    signInEmailConfirmation: "Confirmar Correo",
    signInEmailConfirmationError:
      "* Escribe el mismo correo que escribiste en el primer espacio",
    signInPassword: "Contraseña",
    signInPasswordError:
      "* La contraseña debe contener al menos una mayúscula, una minúscula y un número y debe ser de al menos 8 caracteres",
    signInPasswordConfirmation: "Confirmar Contraseña",
    signInPasswordConfirmationError:
      "* Debes escribir la misma contraseña que escribiste en el espacio anterior",
    signInFirstName: "Nombres",
    signInFirstNameError:
      "* Este espacio es requerido y no puede contener caracteres especiales o núméricos",
    signInLastName: "Apellidos",
    signInLastNameError: "* Este espacio es requerido",
    signInId: "Documento de identidad",
    signInIdCC: "Cédula de Ciudadanía",
    signInIdCE: "Cédula de Extranjería",
    signInIdPassport: "Pasaporte",
    signInIdNumber: "Número del documento",
    signInIdNumberError: "* Introduce un número de documento valido",
    signInDoB: "Fecha de nacimiento",
    signInJan: "Enero",
    signInFeb: "Febrero",
    signInMar: "Marzo",
    signInApr: "Abril",
    signInMay: "Mayo",
    signInJune: "Junio",
    signInJul: "Julio",
    signInAug: "Agosto",
    signInSep: "Septiembre",
    signInOct: "Octubre",
    signInNov: "Noviembre",
    signInDec: "Diciembre",
    signInCity: "Ciudad",
    signInAddress: "Dirección",
    signInAddressError: "* Este espacio es obligatorio",
    signInPhone: "Celular",
    signInPhoneError: "* Debes escribir un número de celular valido",
    signInTC: "Acepto los Términos y Condiciones de Uso del Portal.",
    signInTCError: "* Debes aceptar los terminos y condiciones",
    signInPrivacy:
      "En cumplimiento del Régimen de Protección Datos Personales, autorizo expresamente a TableTop, de manera directa, o a través de terceros designados, para almacenar, consultar, procesar y en general, para dar tratamiento a la información personal que suministre, y para ser incluido en sus bases de datos, recibir información de la Compañía, de conformidad con las políticas de privacidad y manejo de información.",
    signInPrivacyError:
      "* Debes aceptar la política de tratamiento de datos personales",
    signInSubcribe: "Autorizo recibir información por",
    signInTextMessage: "Mensajes de texto SMS (sin costo al usuario)",
    signInWhatsApp: "Mensajes de WhatsApp",
    signInEmailSub: "Recibir notificaciones por correo electrónico",
    signInButton: "¡Registarme!",
    signInSuccess:
      "El usuario se creó con éxito, ahora serás redirigido a la página de inicio.",
    filterTitle: "Filtros",
    filterCuisine: "Tipo de cocina",
    filterClear: "limpiar filtro",
    filterAsian: "Asiatico",
    filterFastFood: "Comida Rapida",
    filterItalian: "Italiano",
    filterMexican: "Mejicano",
    filterBreakfast: "Desayuno",
    filterTypical: "Tipico",
    filterDessert: "Postre",
    filterVeg: "Vegetariano",
    filterCoffee: "Cafe",
    filterRating: "Número de Estrellas",
    filterHelp: "Necesitas Ayuda",
    filterSchedule: "Lunes a Viernes",
    cardDishesFrom: "Platos desde",
    restaurantOptionsOnline: "ORDENA EN LINEA",
    restaurantOptionsOverview: "CEDES",
    restaurantOptionsGallery: "GALERIA",
    restaurantOptionsLocation: "LOCACIÓN",
    restaurantOptionsBooking: "RESERVAR UNA MESA",
    restaurantOptionsReview: "RESEÑAS",
    overViewSchedule: "Horario",
    overviewFacilities: "Comodidades",
    bookingButton: "ENVIAR",
    recommendedTitle: "Recomendados",
    cartTitle: "Artículos del carrito",
    cartFinishWarning:
      "Es posible que se apliquen gastos de envío a su pedido.",
    cartPlaceOrder: "REALIZAR PEDIDO",
    orderSearch: "Buscar Platos...",
    reviewBy: "Por",
    alwaysFirstTitle: "Siempre primero",
    alwaysFirstBody:
      "Se el primero en enterarse de las últimas ofertas y ofertas exclusivas y obten un 15% de descuento en tu primer pedido",
    alwaysFirstFooter: "Se el Primero",
    orderFailedTitle: "¡Ups! No pudimos procesar tu pago",
    orderFailedBody:
      "Parece que encontramos un error. Inténtalo de nuevo. Si continúas teniendo problemas, prueba con otro método de pago",
    orderFailedFooter: "Vuelve a intentarlo",
    orderSuccessTitle: "¡Pago exitoso! Prepárate para una comida deliciosa.",
    orderSuccessBody:
      "Gracias por tu pago. Hemos recibido tu pago con éxito. Tu ID de transacción es",
    orderSuccessBodyTwo:
      "¡Pronto recibirás una factura por correo electrónico!",
    orderSuccessFooter: "Descargar factura",
    forgotPassTitle: "Recupera tu contraseña",
    forgotPassButton: "Recuperar",
    forgotPassBack: "Volver al ingreso",
    logInTitle: "Iniciar Sesión",
    logInSubtitle: "Entra con tu usuario registrado",
    logInRegister: "¿No estas registrado? Regístrate aquí.",
    logInPass: "Contraseña",
    logInFooter: "¿Olvidaste tu contraseña? Recupérala aquí.",
    restaurantAdminTitle: "¡Hola",
    restaurantAdminSubtitle: "Así es como le ha ido a tu restaurante",
    restaurantAdminResTitle: "Nombre del restaurante",
    restaurantAdminResSales: "El monto total de las ventas es",
    restaurantAdminResRating: "Esta es la calificación de este restaurante",
    restaurantEditDetails: "Aquí puedes editar o borrar alguna información",
    restaurantEditAddress: "Estas son las direcciones de tu restaurante",
    restaurantEditPhoneNumber: "Estos son los teléfonos de tu restaurante",
    restaurantReservationsTitle: "Aquí puedes ver las próximas reservas",
    restaurantReservationsEdit: "Si quieres borrar algo puedes hacerlo aquí",
    restaurantReservationsTime: "Hora",
    restaurantReservationsDate: "Fecha",
    logOutText: "Si deseas cerrar sesión, haga click en este botón",
    logOutButton: "Cierra sesión",
    editDetailsModal: "Aquí puedes editar la dirección o teléfono",
    editDetailsError: "Ingresa un número de teléfono o dirección válidos",
    editDishTitle: "Aquí puedes editar los detalles del plato",
    save: "Guardar",
    cancel: "Cancelar",
    newDishFormTitle: "¿Quieres añadir algo a tu menú?",
    newDishFormName: "Nuevo nombre del plato",
    newDishFormNameError:
      "* Debes proporcionar un título que tenga al menos dos caracteres",
    newDishFormDescription: "Nueva descripción del plato",
    newDishFormDescriptionError:
      "* Debe proporcionar una descripción que tenga al menos dos caracteres",
    newDishFormPrice: "Precio del plato nuevo",
    newDishFormPriceError: "* Debe proporcionar un precio para este plato",
    newDishFormPriceErrorTwo: "* El precio debe estar por encima de 0",
    newDishFormCategory: "Nueva categoría del plato",
    newDishFormCategoryLunch: "Almuerzo",
    newDishFormCategoryDrinks: "Bebibas",
    newDishFormButton: "¡Crea el nuevo plato!",
    restaurantAdminMenuTitle: "Este es tu menu",
    restaurantAdminMenuSubtitle: "Si deseas eliminar algo, puede hacerlo aquí.",
    title: "Título",
    price: "Precio",
    generalAdminSubtitle:
      "En esta página puede eliminar o agregar restaurantes",
    generalAdminList: "Actualmente hay",
    generalAdminUserList: "Aquí puedes ver todos los usuarios",
    generalAdminIntro: 'Aquí puede cambiar un usuario existente a administrador de la aplicación, desactivar cualquier usuario, crear un nuevo restaurante y editar un restaurante existente.',
    generalAdminAddUserResAdmin: "Administrador de restaurante",
    generalAdminAddUserGenAdmin: "Administrador general",
    generalAdminAddUserRegUser: "Usuario regular",
    generalAdminAddUserButton: "¡Crea el nuevo usuario!",
    restaurantEditTitle: "Aquí puedes editar los detalles del Restaurante",
    newRestaurantFormTitle: "¿Quieres añadir algún restaurante nuevo?",
    newRestaurantFormName: "Nuevo nombre del restaurante",
    newRestaurantFormNameError:
      "* Debes proporcionar un nombre que tenga al menos dos caracteres.",
    newRestaurantFormLocation: "Nueva ubicación del restaurante",
    newRestaurantFormCategories: "Elige las categorías del nuevo restaurante",
    newRestaurantFormCategoriesError:
      "* Debes proporcionar al menos una categoría para el nuevo restaurante.",
    newRestaurantFormButton: "¡Crea el nuevo restaurante!",
    generalAdminFullList: "Esta es una lista de todos los restaurantes",
    generalAdminDelete: "Si quieres borrar algo puedes hacerlo aquí",
    notFoundTitle: "¿Te perdiste buscando algo?",
    notFoundBody: "Parece que la página que estás buscando no existe",
    notFoundFooter: "Vuelve a la pagina principal",
    remove: "Remover",
    deliveryAddress: "Dirección de entrega",
    savedAddresses: "Direcciones guardadas",
    addAddress: "Agregar nueva dirección",
    name: "Nombre",
    address: "Dirección",
    newAddressError: "* Todos los campos son obligatorios",
    city: "Ciudad",
    addNewAddress: "¡AGREGA ESTA DIRECCIÓN!",
    location: "VER EN GOOGLE MAPS",
    back: "Volver",
    payment: "Pago",
    paymentDebitCard: "Tarjeta Debito",
    paymentCreditCard: "Tarjeta de Credito",
    paymentCreditError: "* Introduce un numero de tarjeta de crédito valido",
    paymentValidThrough: "Valida hasta",
    paymentNameError:
      "* Introduce los nombres como están impresos en la tarjeta",
    paymentDateError: "* Introduce una fecha válida",
    paymentCvvError:
      "* Introduce el código CVV que esta al respaldo de tu tarjeta",
    number: "Número",
    paymentNumberError: "* Introduce tu número de documento de identidad",
    paymentMakePayment: "¡HACER EL PAGO!",
    paymentCardNumber: "Número de la tarjeta",
    paymentSelectBank: "Selecciona tu banco",
    restaurantSearchNull:
      "Ningún restaurante coincide con tu criterios de búsqueda.",
    userAddressError: "Escribe una dirección valida",
    userSubtitle: "Aquí puedes ver y editar tus datos",
    userSaveChanges: "Guardar cambios",
    signOut: "Cerrar sesión",
    signOutText: "Si deseas cerrar sesión, haz clic en este botón",
    generalError: "Ocurrio un error, por favor vuelve a intentarlo.",
    logInSuccessfull: "¡Has iniciado sesión correctamente!",
    userUpdatedMessage: "¡Usuario actualizado con éxito!",
    userUpdateFailedMessage:
      "No se pudo actualizar el usuario, ocurrio un error, intenta nuevamente.",
    userPage: "Ve a la pagina de usuario",
    logOutSuccess: "Sesión terminada correctamente",
    restaurantAdminPage: "Administra tu restaurante",
    appAdminPage: "Administra la plataforma",,
    reviewsTitle: 'Déjanos tu opinion',
    rating: 'Calificación',
    reviewFormTitle: 'Título',
    reviewFormComments: 'Comentarios',
    commentsError: "* Debes escribir tus comentarios y estos no pueden tener mas de 255 caracteres",
    reviewsTitleError: "* Debes escribir un titulo y este no puede tener mas de 40 caracteres",
    reviewStarsError: "* Debes dar una calificación",
    newRestaurantLogoError: '* Se requiere un logo',
    newRestaurantMainPhotoError: '* Se requiere foto principal',
    mainPhoto: 'Foto principal',
    adminEmail: 'Correo del administrador del restaurante',
    adminEmailError: '* Se requiere un correo electrónico de administrador válido',
    usersFetchError: '* Error al obtener usuarios',
    updateUserError: '* Error al actualizar el rol de usuario',
    deavtivateUserWarning: '¿Está seguro de que desea desactivar este usuario? Esta acción no se puede deshacer.',
    deactivatedUserSuccess: 'Usuario desactivado con éxito',
    deactivatedUserFailure: 'Error al desactivar usuario',
    appAdminUserTitle: 'Aquí puede cambiar un rol de usuario a administrador de la aplicación,',
    appAdminUserWarning: 'Tenga cuidado, esta persona tendrá la capacidad de realizar cambios importantes en la plataforma.',
    appAdminUserEmail: 'Correo del nuevo administrador de plataforma',
    appAdminUserButton: 'Actualizar rol de usuario',
    role: 'Rol',
    showUsers: 'Mostrar Usuarios',
    hideUsers: 'Ocultar Usuarios',
    users: 'Usuarios',
    restaurants: 'Restaurantes',
    newRestaurantForm: 'Crea un nuevo restaurante',
    deavtivateRestaurantWarning: '¿Seguro que quieres desactivar este restaurante? Esta acción no se puede revertir.',
    deactivatedRestaurantSuccess: 'Restaurante desactivado con éxito',
    deactivatedRestaurantFailure: 'Error al desactivar el restaurante',
    generalAdminUserListDeactivate: 'Si desea desactivar algún usuario, presione el icono junto a su nombre.',
    newResstaurantAdminEmail: 'Nuevo correo electrónico del administrador del restaurante'

  }
  if (lang === "en") {
    return en[str] || str;
  } else if (lang === "es") {
    return es[str] || str;
  }
};

export default languageSelector;
