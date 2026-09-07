# Imágenes Digitales - Backend

Backend desarrollado con **Node.js** para una plataforma de gestión y visualización de estudios médicos.

El sistema se encarga de administrar la información de los estudios, exponer servicios mediante una API REST y automatizar el procesamiento de imágenes médicas provenientes de archivos DICOM.

Este proyecto fue desarrollado como parte de una **solución real**.

> Este repositorio corresponde a una versión sanitizada publicada con fines de portfolio.  
> Las credenciales, datos de pacientes y configuraciones privadas del entorno productivo fueron removidas.

---

## Funcionalidades

- API REST para gestión de estudios.
- Gestión de información asociada a pacientes.
- Persistencia de datos en base de datos SQL.
- Gestión de usuarios.
- Consulta y recuperación de estudios.
- Procesamiento automatizado de archivos DICOM.
- Extracción de información asociada a los estudios.
- Conversión de imágenes médicas para su visualización web.
- Integración con un frontend desarrollado en React.
- Scripts para automatización del procesamiento de nuevos estudios.
- Validaciones para evitar registros duplicados.

---

## Tecnologías

### Backend

- Node.js
- Express
- JavaScript
- REST API
- SQL
- MySQL

### Procesamiento de imágenes

- Python
- pydicom
- Pillow

---

## Arquitectura

El backend utiliza una estructura separada por responsabilidades.

```text
Routes
   │
   ▼
Controllers
   │
   ▼
Models
   │
   ▼
Database
```

Además, existen procesos independientes encargados de analizar y transformar archivos DICOM.

```text
Estudio DICOM
     │
     ▼
Procesamiento Python
     │
     ├── Extracción de información
     │
     └── Conversión de imagen
     │
     ▼
Backend Node.js
     │
     ▼
Base de datos
     │
     ▼
Frontend React
```

---

## Estructura general

```text
Controller/
Models/
Routes/
config/

convert_dicom.py
scriptImgDicom.js
scriptEcografo.js
index.js
```

---

## Procesamiento DICOM

Uno de los componentes principales del proyecto es el procesamiento automático de estudios médicos en formato **DICOM**.

El sistema permite extraer información necesaria para identificar los estudios y posteriormente generar imágenes compatibles con la aplicación web.

Para este proceso se utiliza Python junto con `pydicom` y herramientas de procesamiento de imágenes.

Esto permite desacoplar el procesamiento de archivos médicos del servidor principal desarrollado en Node.js.

---

## Variables de entorno

Las configuraciones privadas deben definirse mediante variables de entorno.

Crear un archivo `.env` tomando como referencia:

```text
.env.example
```

Ejemplo:

```env
PORT=5000

DB_HOST=localhost
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name

TOKEN_KEY=your_secret_key
```

El archivo `.env` **no debe versionarse**.

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/maycogutierrez/Imagenes_SPG_Back.git
```

Ingresar al proyecto:

```bash
cd Imagenes_SPG_Back
```

Instalar las dependencias:

```bash
npm install
```

Configurar las variables de entorno utilizando `.env.example`.

Luego ejecutar el servidor utilizando el script configurado en el proyecto.

---

## Frontend

La interfaz web asociada al sistema está desarrollada con React.

Repositorio:

[Front_Imagenes_Digitales](https://github.com/maycogutierrez/Imagenes_SPG_Front.git)

La arquitectura completa del proyecto puede resumirse como:

```text
React
  │
  ▼
REST API
  │
Node.js / Express
  │
  ├── SQL Database
  │
  └── Python / DICOM Processing
```

---

## Contexto del proyecto

El sistema surgió de una necesidad real relacionada con la gestión y disponibilidad de estudios médicos digitales.

Durante el desarrollo trabajé en:

- Diseño e implementación del backend.
- Desarrollo de endpoints REST.
- Integración con base de datos.
- Procesamiento automático de archivos.
- Integración entre Node.js y procesos Python.
- Manejo y organización de estudios.
- Prevención de registros duplicados.
- Integración con el frontend.
- Automatización del procesamiento de nuevos estudios.

---

## Seguridad y privacidad

Por tratarse de un proyecto relacionado con información médica, la versión pública fue sanitizada antes de ser publicada.

El repositorio no contiene:

- Nombres reales de pacientes.
- DNI.
- PatientID reales.
- Estudios DICOM reales.
- Imágenes médicas reales.
- Credenciales de bases de datos.
- Tokens de autenticación.
- API keys.
- IPs o dominios privados.
- Configuración del servidor productivo.
- Backups o dumps de bases de datos.

Las credenciales deben configurarse exclusivamente mediante variables de entorno.

---

## Autor

**Mayco A. Gutierrez**

Frontend / Full Stack Developer

[LinkedIn](https://www.linkedin.com/in/mayco-gutierrez-918b54b8/)  
[GitHub](https://github.com/maycogutierrez)
