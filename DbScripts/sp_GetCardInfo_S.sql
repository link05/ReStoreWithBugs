
CREATE PROCEDURE sp_GetCardInfo_S
    @Id INT
AS
BEGIN
    SELECT Id,Label,Description,Qty,Price
   FROM greetingcards
   WHERE Id= @Id
END;
