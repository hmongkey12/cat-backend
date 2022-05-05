# cat-backend

The backend of Epic Cat Battles of History

### Usage

1. To record user hash and vote for the cat. Simply replace hashValue and catName with the values you want.

   Example:
   If hashValue = 123456 and catName = Sylvester
   https://epic-cat-battles-of-history.herokuapp.com/users?hash=123456&cat=Sylvester

` Send POST request to https://epic-cat-battles-of-history.herokuapp.com/users?hash=hashValue&cat=catName`

2. To get the cat object so you can grab the vote. Simply replace catName with the name you want.

   Example:
   If catName = Sylvester
   https://epic-cat-battles-of-history.herokuapp.com/users?cat=Sylvester

` Send GET request to https://epic-cat-battles-of-history.herokuapp.com/users?cat=catName`
