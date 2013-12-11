// check that this user owns the document
ownsDocument = function(userId, doc) {
  return doc && doc.userId === userId;
};
