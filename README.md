# ATP
Auto Trade Program


## How to

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

## Commit Convention

|유형|뜻|설명|
|------|---|---|
|Feat|Features|새로운 기능 추가
|Fix|Bug Fix|버그 수정
|Docs|Documentation|문서 수정
|Style|Styles|코드 스타일 수정(포맷, 세미콜론 누락 등)
|Refactor|Code Refactoring|코드 리펙토링
|Perf|Performance Improvements|성능 개선
|Chore|Chores|중요하지 않은 자잘한 수정