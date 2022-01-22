# ATPUP
Auto Trade Program Using Python

You can use in virtual environment.

``` bash
    python3 -m venv env
    source env/bin/activate
```


Use to exit the virtual environment:

``` bash
    deactivate
```


Install package in virtual environment:

``` bash
    pip install -r requirements.txt
```

You can run this program if you make `config.py`:

```bash
    _Access_key = 'your_access_key'
    _Secret_key = 'your_secret_key'

    def get_access_key():
        return _Access_key

    def get_secret_key():
        return _Secret_key
```