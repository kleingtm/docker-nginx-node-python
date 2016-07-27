FROM tutum/nginx
RUN rm /etc/nginx/sites-enabled/default
ADD sites-enabled/ /etc/nginx/sites-enabled/

ADD www /usr/share/nginx/html

# add uwsgi params to nginx root. used in sites-enabled reverse-proxy api definition
ADD uwsgi_params /etc/nginx