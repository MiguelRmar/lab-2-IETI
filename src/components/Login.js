importar  Reaccionar  desde  ' reaccionar ' ;
importar  Avatar  desde  ' @ material-ui / core / Avatar ' ;
Importar  botón  desde  ' @ material-ui / core / Button ' ;
importar  CssBaseline  desde  ' @ material-ui / core / CssBaseline ' ;
importar  FormControl  desde  ' @ material-ui / core / FormControl ' ;
importar  entrada  desde  ' @ material-ui / core / Input ' ;
importar  InputLabel de  ' @ material-ui / core / InputLabel ' ;
importar  LockIcon  desde  ' @ material-ui / icons / LockOutlined ' ;
importar  papel  desde  ' @ material-ui / core / Paper ' ;
importar  tipografía  desde  ' @ material-ui / core / Typography ' ;
importar  ' ./Login.css '


 exportar  clase  Iniciar sesión  extiende  React . Componente { render () {
         return (
             < React

    . Fragmento > 
                < CssBaseline / > 
                < className principal = " diseño " > 
                    < Papel className = " papel " > 
                        < Avatar className = " Avatar " > 
                            < LockIcon / > 
                        < / Avatar > 
                        < tipografía variante = " h2 " > Entrar en < / Tipografía > 
                        <" form " > 
                            < FormControl margin = " normal " required fullWidth > 
                                < InputLabel htmlFor = " email " > Dirección de correo electrónico < / InputLabel > 
                                < Input id = " email " name = " email " autoComplete = " email " autoFocus / > 
                            < / Control de formulario > 
                            <Margen de control de formulario =" normal " requiere ancho completo > 
                                < InputLabel htmlFor = " contraseña " > Contraseña < / InputLabel > 
                                < 
                                    Nombre deentrada = " contraseña " 
                                    tipo = " contraseña " 
                                    id = " contraseña " 
                                    autoComplete = " contraseña-actual "
                                / > 
                            </ FormControl > 
                            < Botón 
                                tipo = " submit " 
                                fullwidth 
                                variante = " contenida " 
                                de color = " primaria " 
                                className = " presentar "
                             > 
                                Inscripción en 
                            < / Button > 
                        < / formar > 
                    </ Papel >
                < / main > 
            < / React . Fragmento > 
        ); 
    } 

}