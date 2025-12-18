const calculateProfileCompletion = (user) => {
  let score = 0;

  if (user.username) score += 10;
  if (user.profile?.bio) score += 15;
  if (user.profile?.country) score += 10;
  if (user.skills?.length > 0) score += 25;
  if (user.experience?.length > 0) score += 30;

  return Math.min(score, 100);
};

export default calculateProfileCompletion;
