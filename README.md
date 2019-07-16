# Pasty


# Django + ReactJS + Redux

Pasty is a paste tool  website where you can store text online 

This project is broken up into a backend and frontend. The backend contains the Django project which uses the Django Rest Framework to host a simple API. The frontend uses React and queries data from the API.

Run the following commands to get started:

```json
virtualenv env
pip install -r requirements.txt
cd .\pasty_gui\
npm i
npm run build
cd ..
cd .\pasty_api\
python manage.py runserver
```
