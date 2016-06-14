FROM php:7-apache

COPY . /var/www/html/

RUN find /var/www/html/ -type d -exec chmod 775 {} \; && find /var/www/html/ -type f -exec chmod 664 {} \; && chown -R www-data:www-data /var/www/html/
