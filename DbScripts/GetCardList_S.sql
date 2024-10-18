-- Create a stored procedure named "GetCustomersByCountry"
CREATE PROCEDURE sp_GetCardList_S
AS
BEGIN
   
   SELECT Id,Label,Description,Qty,Price
   FROM greetingcards
END;
